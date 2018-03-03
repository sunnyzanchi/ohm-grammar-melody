'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ohm = _interopDefault(require('ohm-js'));

var content = "Melody {\n  Expr\n    = (Directive\n    | BlockDeclaration\n    | ConcurrentSequence\n    | Sequence)*\n\n  ConcurrentSequence (a list of sequences)\n    = \"[\" ListOf<Sequence, \";\"> \"]\"\n\n  BlockDeclaration\n    = identifier \"{\" Directive* Sequence \"}\"\n\n  Sequence (a sequence of notes)\n    = \"(\"* (identifier | chord)+ \")\"*\n\n  Directive\n    = \"#\" letter+ \"=\" ( note | identifier | digit+ | String )\n\n  String\n    = \"\\\"\" (~\"\\\"\" any)* \"\\\"\"\n\n  identifier\n    = \"$\" letter+\n\n  chord\n    = note+\n\n  note\n    = (modnote | notebase) digit*\n\n  modnote\n    = notebase (flat | natural | sharp)\n\n  notebase\n    =\"a\"..\"g\"\n\n  flat\n    = \",\"\n\n  natural\n    = \"-\"\n\n  sharp\n    = \"'\"\n}\n";

const melody = ohm.grammar(content);

module.exports = {
  grammar: melody,
};
