const generateData = (blocks = [], directives = [], sequence = []) => ({
  blocks: blocks.reduce((acc, block) => ({
    ...acc,
    ...block,
  }), {}),
  directives: directives.reduce((acc, directive) => ({
    ...acc,
    ...directive,
  }), {}),
  sequence,
});

export default {
  eval: {
    _terminal() {
      return this.primitiveValue;
    },
    BlockDeclaration(
      identifier,
      lBrace,
      directives,
      blockDeclarations,
      sequence,
      rBrace
    ) {
      return {
        [identifier.eval()]: generateData(
          blockDeclarations.eval(),
          directives.eval(),
          sequence.eval(),
        ),
      };
    },
    chord(notes) {
      return notes.eval();
    },
    Directive(hashtag, letters, equals, value) {
      return {
        [letters.eval().join('')]: value.eval(),
      };
    },
    Expr(node) {
      console.log('Expr====');
      const blocks = node.children
        .filter(n => n.ctorName === 'BlockDeclaration')
        .map(n => n.eval());
      const directives = node.children
        .filter(n => n.ctorName === 'Directive')
        .map(n => n.eval());
      const sequence = node.children.find(n => n.ctorName === 'Sequence')
        .eval();

      return generateData(blocks, directives, sequence);
    },
    identifier(dollarSign, letters) {
      return letters.eval().join('');
    },
    note(notebase, octaveNode) {
      const octave = octaveNode.eval();

      return {
        note: notebase.eval(),
        octave: octave.length > 0 && Number(octave.join('')),
      };
    },
    Sequence(ident) {
      return ident.eval();
    },
  },
};
