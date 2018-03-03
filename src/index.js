import ohm from 'ohm-js';
import content from 'inline-text:melody.ohm';

const melody = ohm.grammar(content);

module.exports = {
  grammar: melody,
};
