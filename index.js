const fs = require('fs');
const path = require('path');
const ohm = require('ohm-js');
const content = fs.readFileSync(path.resolve(__dirname, 'melody.ohm'));

const melody = ohm.grammar(content);

module.exports = {
  grammar: melody,
};
