import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import ts from 'typescript';

const errors = [];
const root = process.cwd();

function parseFile(path) {
  return ts.createSourceFile(path, readFileSync(resolve(root, path), 'utf8'), ts.ScriptTarget.Latest, true);
}

function propName(node) {
  return ts.isIdentifier(node) || ts.isStringLiteralLike(node) || ts.isNumericLiteral(node) ? node.text : null;
}

function readValue(node) {
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isArrayLiteralExpression(node)) return node.elements.map(readValue);
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(node.properties
      .filter(ts.isPropertyAssignment)
      .map(property => [propName(property.name), readValue(property.initializer)]));
  }
  if (ts.isCallExpression(node) && ts.isIdentifier(node.expression) && ['check', 's', 'm'].includes(node.expression.text)) {
    const [question, correct, wrong] = node.arguments.slice(0, 3).map(readValue);
    return { question, correct: Array.isArray(correct) ? correct : [correct], wrong };
  }
  throw new Error('Unexpected question-bank syntax: ' + node.getText().slice(0, 100));
}

function readConst(file, name) {
  for (const stmt of parseFile(file).statements) {
    if (!ts.isVariableStatement(stmt)) continue;
    for (const declaration of stmt.declarationList.declarations) {
      if (ts.isIdentifier(declaration.name) && declaration.name.text === name && declaration.initializer) {
        return readValue(declaration.initializer);
      }
    }
  }
  throw new Error('Question bank was not found: ' + file + ' (' + name + ')');
}

function headings(file) {
  const found = [];
  const visit = node => {
    if (ts.isObjectLiteralExpression(node)) {
      const fields = Object.fromEntries(node.properties
        .filter(ts.isPropertyAssignment)
        .map(property => [propName(property.name), property.initializer]));
      if (fields.type && ts.isStringLiteralLike(fields.type) && fields.type.text === 'heading'
        && fields.title && ts.isStringLiteralLike(fields.title)) {
        found.push(fields.title.text);
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(parseFile(file));
  return found;
}

function questions(value) {
  if (Array.isArray(value)) return value.flatMap(questions);
  if (value && typeof value === 'object') {
    if (typeof value.question === 'string' && Array.isArray(value.correct)) return [value];
    return Object.values(value).flatMap(questions);
  }
  return [];
}

function normalized(value) {
  return value.toLocaleLowerCase('de-DE')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, ' ').trim();
}

function compareSections(field, actual, expected) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);
  for (const title of actual) {
    if (!expectedSet.has(title)) errors.push(field + ': No questions for section "' + title + '"');
  }
  for (const title of expected) {
    if (!actualSet.has(title)) errors.push(field + ': Question bank has no matching section "' + title + '"');
  }
}

const extra = readConst('src/data/extraPracticeChecks.ts', 'extraPracticeChecks');
const lf9Tumor = readConst('src/data/uniquePractice.ts', 'lf9TumorPracticeChecks');
const lf9Overview = readConst('src/data/lf9QuestionQuality.ts', 'overviewChecks');
const lf9Topics = readConst('src/data/lf9QuestionQuality.ts', 'topicChecks');
const banks = {
  lf9: [lf9Overview, lf9Topics, lf9Tumor, extra.lf9],
  lf10: [readConst('src/data/lf10PracticeChecks.ts', 'lf10PracticeChecks'), extra.lf10],
  lf11: [readConst('src/data/lf11PracticeChecks.ts', 'lf11PracticeChecks'), extra.lf11],
  lf12: [readConst('src/data/lf12PracticeChecks.ts', 'lf12PracticeChecks'), extra.lf12],
};

compareSections('LF9 Tumor', headings('src/data/lf9Topic6Polish.ts'), Object.keys(lf9Tumor));
const depthSource = readFileSync(resolve(root, 'src/data/depthEnhancements.ts'), 'utf8');

for (const num of [10, 11, 12]) {
  const field = 'lf' + num;
  const original = headings('src/data/' + field + '.ts');
  compareSections(field, original, Object.keys(banks[field][0]));
  for (const title of Object.keys(extra[field])) {
    if (!depthSource.includes("title: '" + title + "'")) {
      errors.push(field + ': Depth lesson heading missing for "' + title + '"');
    }
  }
}

for (const [field, sources] of Object.entries(banks)) {
  const seen = new Set();
  const items = sources.flatMap(questions);
  for (const item of items) {
    const question = normalized(item.question);
    if (!question || seen.has(question)) errors.push(field + ': Repeated or blank question "' + item.question + '"');
    seen.add(question);
    if (!item.correct.length || !item.wrong.length) {
      errors.push(field + ': Missing correct or incorrect answers in "' + item.question + '"');
    }
    const answers = [...item.correct, ...item.wrong].map(normalized);
    if (answers.length !== new Set(answers).size) {
      errors.push(field + ': Duplicate options in "' + item.question + '"');
    }
    if ((field !== 'lf9' || sources.indexOf(item) >= 0) && answers.length < 2) {
      errors.push(field + ': Too few options in "' + item.question + '"');
    }
  }
  console.log(field.toUpperCase() + ': ' + items.length + ' unique authored practice questions checked');
}

const dataIndex = readFileSync(resolve(root, 'src/data/index.ts'), 'utf8');
if (!dataIndex.includes('.map(useDistinctPractice)')) {
  errors.push('The distinct-practice step is missing from the module pipeline');
}

if (errors.length) {
  console.error('\nQuestion integrity check FAILED:');
  errors.forEach(problem => console.error(' - ' + problem));
  process.exitCode = 1;
} else {
  console.log('All practice catalogues have matching sections and no identical questions.');
}
