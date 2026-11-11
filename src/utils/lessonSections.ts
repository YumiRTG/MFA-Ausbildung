import type { LearningTopic, TopicContent } from '@/types';

export interface LessonSection {
  title: string;
  blocks: TopicContent[];
}

export function isLessonPracticeHeading(block: TopicContent) {
  if (block.type !== 'heading' || !block.title) return false;
  const title = block.title.trim();
  return title.startsWith('✍️')
    || /^(übungen?|aufgaben?|mini[- ]?check|lerncheck|arbeitsauftrag|wiederholung)/i.test(title);
}

// Introductory images, summaries and objectives belong with the first lesson,
// rather than becoming a separate exercise-free page in LF9–LF12.
export function partitionLesson(
  topic: LearningTopic,
  attachIntroductionToFirstLesson: boolean,
): LessonSection[] {
  const sections: LessonSection[] = [];
  let current: LessonSection | null = null;
  const introduction: TopicContent[] = [];

  for (const block of topic.content) {
    const newSection = block.type === 'heading' && !isLessonPracticeHeading(block);
    if (newSection) {
      if (current) {
        sections.push(current);
      } else if (introduction.length && !attachIntroductionToFirstLesson) {
        sections.push({ title: 'Überblick', blocks: [...introduction] });
      }
      const isFirst: boolean = current === null;
      current = {
        title: block.title || 'Lernabschnitt',
        blocks: isFirst && attachIntroductionToFirstLesson
          ? [block, ...introduction]
          : [block],
      };
      introduction.length = 0;
    } else if (current) {
      current.blocks.push(block);
    } else {
      introduction.push(block);
    }
  }

  if (current) sections.push(current);
  else if (introduction.length) {
    sections.push({ title: topic.title, blocks: [...introduction] });
  }

  return sections;
}
