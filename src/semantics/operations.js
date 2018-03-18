export default {
  eval: {
    _terminal() {
      return this.primitiveValue;
    },
    chord(notes) {
      return notes.eval();
    },
    note(notebase, octaveNode) {
      const octave = octaveNode.eval();

      return {
        note: notebase.eval(),
        octave: octave.length > 0 && Number(octave.join('')),
      };
    },
    Sequence(lParen, ident, rParen) {
      console.log(ident.eval());
      return ident.eval();
    },
  },
};
