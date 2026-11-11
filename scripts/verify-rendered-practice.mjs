// Integration check: inspect the real modules after every content transform,
// using the same lesson partitioning code as the React learning interface.
import { build } from 'esbuild';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const folder = mkdtempSync(join(tmpdir(), 'mfa-practice-'));
try {
  const compiled = await build({
    entryPoints: ['src/data/index.ts', 'src/utils/lessonSections.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
    outdir: folder,
    entryNames: '[name]',
    outExtension: { '.js': '.mjs' },
    define: { 'import.meta.env.BASE_URL': '"/MFA-Ausbildung/"' },
    logLevel: 'silent',
  });
  for (const file of compiled.outputFiles) writeFileSync(file.path, file.contents);
  const { modules } = await import(pathToFileURL(join(folder, 'index.mjs')).href);
  const { partitionLesson, isLessonPracticeHeading } =
    await import(pathToFileURL(join(folder, 'lessonSections.mjs')).href);

  const missing = [];
  const duplicates = [];

  function normalized(value) {
    return value.toLocaleLowerCase('de-DE')
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }

  for (const field of ['lf9', 'lf10', 'lf11', 'lf12']) {
    const module = modules.find(item => item.id === field);
    if (!module) throw new Error(field + ' missing from generated modules');
    let steps = 0, questions = 0;
    const seen = new Set();

    for (const topic of module.topics) {
      // This flag is also used in ModuleDetailV4 when rendering LF9-LF12.
      const sections = partitionLesson(topic, true);
      for (const section of sections) {
        steps += 1;
        const sourceQuestions = section.blocks.flatMap((block, index) => {
          if (!isLessonPracticeHeading(block)) return [];
          const next = section.blocks[index + 1];
          return next?.type === 'list' ? next.items || [] : [];
        });
        const visible = sourceQuestions.slice(0, 2);
        questions += visible.length;

        if (visible.length < 2) {
          missing.push(field + ' / ' + topic.title + ' / ' + section.title
            + ' (' + visible.length + ' questions)');
        }

        for (const item of visible) {
          const prompt = normalized(item.split('|||')[0]);
          if (!prompt || seen.has(prompt)) {
            duplicates.push(field + ' / ' + topic.title + ' / ' + section.title
              + ' / ' + item.split('|||')[0]);
          }
          seen.add(prompt);
        }
      }
    }
    console.log(field.toUpperCase() + ': ' + steps + ' actual learning steps, '
      + questions + ' visible questions');
  }

  if (missing.length || duplicates.length) {
    if (missing.length) {
      console.error('LEARNING STEPS WITHOUT TWO QUESTIONS (' + missing.length + '):');
      missing.forEach(line => console.error(' - ' + line));
    }
    if (duplicates.length) {
      console.error('REPEATED VISIBLE LEARNING QUESTIONS (' + duplicates.length + '):');
      duplicates.forEach(line => console.error(' - ' + line));
    }
    process.exitCode = 1;
  } else {
    console.log('PASS: Every LF9–LF12 learning step has two non-duplicated practice questions.');
  }
} finally {
  rmSync(folder, { recursive: true, force: true });
}
