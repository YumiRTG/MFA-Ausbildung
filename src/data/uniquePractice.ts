import type { LearningModule, LearningTopic, TopicContent } from '@/types';
import { lf10PracticeChecks } from './lf10PracticeChecks';
import { lf11PracticeChecks } from './lf11PracticeChecks';
import { lf12PracticeChecks } from './lf12PracticeChecks';

export interface CuratedPracticeQuestion {
  question: string;
  correct: string[];
  wrong: string[];
}

const s = (question: string, correct: string, wrong: string[]): CuratedPracticeQuestion => ({
  question, correct: [correct], wrong,
});
const m = (question: string, correct: string[], wrong: string[]): CuratedPracticeQuestion => ({
  question, correct, wrong,
});

// LF9 already has a large, individually written question catalogue. The tumour
// section was previously skipped and fell back to generic comprehension prompts.
const lf9TumorPracticeChecks: Record<string, CuratedPracticeQuestion[]> = {
  '6.1 Was ist ein Tumor?': [
    s('Was unterscheidet einen malignen Tumor von einem benignen Tumor besonders?', 'Maligne Tumoren können invasiv wachsen und metastasieren.', [
      'Benigne Tumoren bilden definitionsgemäß Fernmetastasen.',
      'Maligne Tumoren sind immer vollständig abgekapselt.',
      'Ein Tumor bezeichnet grundsätzlich nur eine harmlose Schwellung.',
      'Benigne Tumoren bestehen ausschließlich aus abgestorbenen Zellen.',
    ]),
    m('Welche Aussagen über gutartige Tumoren sind richtig?', [
      'Sie können durch ihre Größe oder Lage Beschwerden auslösen.',
      'Sie bilden keine Metastasen.',
    ], [
      'Sie sind definitionsgemäß immer völlig beschwerdefrei.',
      'Sie wachsen typischerweise infiltrierend in jedes Nachbarorgan.',
      'Sie sind immer mit einer Krebserkrankung gleichzusetzen.',
    ]),
  ],
  '6.2 Wie entsteht Krebs?': [
    s('Was kann dazu führen, dass Zellen ihre Wachstumskontrolle verlieren?', 'Eine Anhäufung ungünstiger Veränderungen im Erbgut.', [
      'Eine normale und fehlerfreie Regulation jeder Zellteilung.',
      'Die bloße Anwesenheit einer gesunden Zellmembran.',
      'Eine planmäßige Beseitigung geschädigter Zellen.',
      'Ein intakter programmierter Zelltod aller auffälligen Zellen.',
    ]),
    m('Welche Aussagen zu Risikofaktoren der Krebsentstehung treffen zu?', [
      'Risikofaktoren können die Wahrscheinlichkeit einer Erkrankung erhöhen.',
      'Ein Risikofaktor führt nicht bei jeder betroffenen Person zwangsläufig zu Krebs.',
    ], [
      'Jeder Risikofaktor verursacht ausnahmslos sofort einen Tumor.',
      'Krebs ist unabhängig von Veränderungen der Zellregulation.',
      'Bösartige Zellen können niemals in umliegendes Gewebe einwachsen.',
    ]),
  ],
  '6.3 Primärtumor und Metastasen': [
    s('Was bezeichnet der Begriff Primärtumor?', 'Den ursprünglichen Krebsherd, von dem die Erkrankung ausgeht.', [
      'Immer eine Tochtergeschwulst in einem anderen Organ.',
      'Ausschließlich eine nicht entzündete Lymphknotenschwellung.',
      'Grundsätzlich eine harmlose Hautveränderung.',
      'Den Ort, an dem eine Metastase zufällig zuerst entdeckt wird.',
    ]),
    m('Welche Aussagen zur Metastasierung sind korrekt?', [
      'Tumorzellen können über Blut- oder Lymphwege in andere Organe gelangen.',
      'Eine Lebermetastase eines Darmkarzinoms besteht aus Zellen des Darmtumors.',
    ], [
      'Jede Metastase ist definitionsgemäß ein eigenständiger Primärtumor.',
      'Gutartige Tumoren bilden regelmäßig Fernmetastasen.',
      'Metastasen bleiben definitionsgemäß immer auf den ursprünglichen Tumor begrenzt.',
    ]),
  ],
  '6.4 TNM-System': [
    s('Wofür steht der Buchstabe N in der TNM-Klassifikation?', 'Für den Befall regionaler Lymphknoten.', [
      'Für die Anzahl der benötigten Medikamente.',
      'Für den allgemeinen Ernährungszustand.',
      'Für die Art des Anästhesieverfahrens.',
      'Für die Größe sämtlicher Fernmetastasen.',
    ]),
    m('Welche Zuordnungen der TNM-Klassifikation stimmen?', [
      'T beschreibt die lokale Ausdehnung des Primärtumors.',
      'M beschreibt das Vorliegen von Fernmetastasen.',
    ], [
      'N steht ausschließlich für die Anzahl der Chemotherapiezyklen.',
      'M bezeichnet immer die Größe des Primärtumors.',
      'T beschreibt den Impfstatus des Patienten.',
    ]),
  ],
  '6.5 Krebsbehandlung': [
    s('Welche Behandlungsform zählt grundsätzlich zu den systemischen Krebstherapien?', 'Eine geeignete medikamentöse Therapie, die im Körper verteilt wirkt.', [
      'Die alleinige chirurgische Entfernung eines örtlich begrenzten Befunds.',
      'Die ausschließliche Bestrahlung eines lokal definierten Feldes.',
      'Eine Untersuchung des Blutdrucks ohne weitere Behandlung.',
      'Die Entnahme einer Gewebeprobe zur Diagnostik.',
    ]),
    m('Wovon hängt die individuelle Auswahl einer Krebstherapie ab?', [
      'Tumorart, Stadium und Lage des Tumors.',
      'Allgemeinzustand und gegebenenfalls molekulare Merkmale.',
    ], [
      'Ausschließlich vom Geburtsmonat.',
      'Immer nur von der Länge der Krankenakte.',
      'Unabhängig von der Tumorart grundsätzlich von einem einzigen festen Schema.',
    ]),
  ],
  '6.6 Ösophagus-, Magen- und kolorektales Karzinom': [
    s('Welches Symptom sollte besonders an eine Erkrankung der Speiseröhre denken lassen?', 'Anhaltende Schluckbeschwerden (Dysphagie).', [
      'Ausschließlich Schmerzen im Sprunggelenk.',
      'Nur eine kurzfristig verstopfte Nase.',
      'Isolierter Ohrenschmalz ohne Beschwerden.',
      'Allein eine vermehrte Schweißbildung an der Hand.',
    ]),
    m('Welche Aussagen zum kolorektalen Karzinom sind richtig?', [
      'Manche Karzinome können sich über Vorstufen wie Adenome entwickeln.',
      'Ein Ileus kann als Komplikation einer fortgeschrittenen Erkrankung auftreten.',
    ], [
      'Ein Dickdarmkarzinom entwickelt sich ausnahmslos innerhalb weniger Minuten.',
      'Ein Darmverschluss ist bei Darmtumoren definitionsgemäß ausgeschlossen.',
      'Ein Stoma ist in jeder Phase bei jedem Patienten zwingend erforderlich.',
    ]),
  ],
};

const catalogs: Record<string, Record<string, CuratedPracticeQuestion[]>> = {
  lf10: lf10PracticeChecks,
  lf11: lf11PracticeChecks,
  lf12: lf12PracticeChecks,
};

function isPracticeHeading(block: TopicContent) {
  if (block.type !== 'heading' || !block.title) return false;
  return block.title.trim().startsWith('✍️')
    || /^(übungen?|aufgaben?|mini[- ]?check|lerncheck|arbeitsauftrag|wiederholung)/i.test(block.title.trim());
}

function isSectionHeading(block: TopicContent) {
  return block.type === 'heading' && !isPracticeHeading(block);
}

function encodeCheck(check: CuratedPracticeQuestion) {
  return [check.question, check.correct.join('&&&'), ...check.wrong].join('|||');
}

function rewriteTopic(topic: LearningTopic, catalog: Record<string, CuratedPracticeQuestion[]>): LearningTopic {
  const content: TopicContent[] = [];
  let segment: TopicContent[] = [];
  let title: string | null = null;

  const finish = () => {
    if (!segment.length) return;
    // Earlier enrichers may have inserted exercises. Remove them rather than
    // stacking another set of almost identical questions below the same text.
    const practiceIndex = segment.findIndex(isPracticeHeading);
    const visible = practiceIndex < 0 ? segment : segment.slice(0, practiceIndex);
    content.push(...visible);
    const checks = title ? catalog[title] : undefined;
    if (checks?.length && visible.length) {
      content.push(
        { type: 'heading', title: '✍️ Kurz üben – Wissen anwenden' },
        { type: 'list', items: checks.map(encodeCheck) },
      );
    }
  };

  topic.content.forEach(block => {
    if (isSectionHeading(block)) {
      finish();
      title = block.title || null;
      segment = [block];
    } else {
      segment.push(block);
    }
  });
  finish();

  return { ...topic, content };
}

function withoutLf9Overview(topic: LearningTopic): LearningTopic {
  const content: TopicContent[] = [];
  for (let i = 0; i < topic.content.length; i += 1) {
    const block = topic.content[i];
    if (block.type === 'heading' && block.title === '✍️ Kurz üben – Überblick') {
      if (topic.content[i + 1]?.type === 'list') i += 1;
      continue;
    }
    content.push(block);
  }
  return { ...topic, content };
}

function normalizeQuestion(question: string) {
  return question
    .toLocaleLowerCase('de-DE')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ').trim();
}

// An identical practice prompt must never appear twice within one Lernfeld.
function removeRepeatedPracticeItems(topics: LearningTopic[]): LearningTopic[] {
  const seen = new Set<string>();
  return topics.map(topic => {
    const content: TopicContent[] = [];
    for (let i = 0; i < topic.content.length; i += 1) {
      const block = topic.content[i];
      const next = topic.content[i + 1];
      if (isPracticeHeading(block) && next?.type === 'list') {
        const items = (next.items || []).filter(item => {
          const prompt = normalizeQuestion(item.split('|||')[0]);
          if (!prompt || seen.has(prompt)) return false;
          seen.add(prompt);
          return true;
        });
        if (items.length) {
          content.push(block, { ...next, items });
        }
        i += 1;
        continue;
      }
      content.push(block);
    }
    return { ...topic, content };
  });
}

export function useDistinctPractice(module: LearningModule): LearningModule {
  const catalog = catalogs[module.id];
  if (catalog) {
    return {
      ...module,
      topics: removeRepeatedPracticeItems(module.topics.map(topic => rewriteTopic(topic, catalog))),
    };
  }

  if (module.id === 'lf9') {
    return {
      ...module,
      topics: removeRepeatedPracticeItems(
        module.topics.map(topic => {
          if (topic.id === 'lf9-06-tumore') return rewriteTopic(topic, lf9TumorPracticeChecks);
          return withoutLf9Overview(topic);
        }),
      ),
    };
  }

  return module;
}
