// Check the questions that the app actually receives AFTER all data transforms.
// A source catalogue containing questions is insufficient if the rendering
// pipeline produces sections with zero visible practice questions.
import { build } from 'esbuild';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const folder = mkdtempSync(join(tmpdir(), 'mfa-practice-'));
try {
  const compiled = await build({
    entryPoints: ['src/data/index.ts'],
    bundle: true, platform: 'node', format: 'esm', write: false,
    outfile: 'modules.mjs',
    define: { 'import.meta.env.BASE_URL': '"/MFA-Ausbildung/"' },
    logLevel: 'silent',
  });
  const destination = join(folder, 'modules.mjs');
  writeFileSync(destination, compiled.outputFiles[0].text);
  const { modules } = await import(pathToFileURL(destination).href);
  const missing = [];

  function isPracticeHeading(block) {
    return block?.type === 'heading' && (
      block.title?.trim().startsWith('✍️')
      || /^(übungen?|aufgaben?|mini[- ]?check|lerncheck|arbeitsauftrag|wiederholung)/i.test(block.title?.trim() || '')
    );
  }

  for (const field of ['lf9','lf10','lf11','lf12']) {
    const module = modules.find(item => item.id === field);
    if (!module) throw new Error(field + ' missing from generated modules');
    let steps = 0, questions = 0;
    for (const topic of module.topics) {
      const grouped = [];
      let current = [], title = 'Überblick';
      for (const block of topic.content) {
        if (block.type === 'heading' && !isPracticeHeading(block)) {
          if (current.length) grouped.push({title, blocks: current});
          current = [block]; title = block.title;
        } else current.push(block);
      }
      if (current.length) grouped.push({title, blocks:current});
      for (const section of grouped) {
        steps++;
        const exercise = section.blocks.findIndex(isPracticeHeading);
        const found = exercise < 0 ? 0 : section.blocks.slice(exercise+1)
          .filter(block=>block.type==='list').flatMap(block=>block.items||[]).slice(0,2).length;
        questions += found;
        if (found === 0) missing.push(field+' / '+topic.title+' / '+section.title);
      }
    }
    console.log(field.toUpperCase()+': '+steps+' rendered learning steps, '+questions+' visible questions');
  }
  if (missing.length) {
    console.error('LEARNING STEPS WITH ZERO QUESTIONS ('+missing.length+'):');
    for (const line of missing) console.error(' - '+line);
    process.exitCode = 1;
  } else {
    console.log('All rendered learning steps contain at least one question.');
  }
} finally {
  rmSync(folder, { recursive:true, force:true });
}
