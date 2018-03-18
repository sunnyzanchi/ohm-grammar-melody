import ohm from 'ohm-js';
import content from 'inline-text:melody.ohm';
import { operations } from './semantics/index.js';

const melody = ohm.grammar(content);
const semantics = melody.createSemantics();
Object.entries(operations).forEach(([operation, actions]) =>
  semantics.addOperation(operation, actions)
);

module.exports = {
  grammar: melody,
  semantics,
};
