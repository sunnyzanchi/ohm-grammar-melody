# Data Structure Spec
More of a stream of conciousness dump than a spec at the moment.

## Blocks
The final data structure that will come out of Melody (tentatively) is a block:

```
Block: {
  directives: {
    key: Note | Block | number
  },
  blocks: {
    name: Block
  },
  sequence: Array<Block | Chord | ConcurrentSequence>
}

```

The `blocks` prop contains a map of child blocks with the same structure.
Child blocks can use their sibling blocks, but not blocks defined in their siblings.
For example: 

```
const structure = {
  directives: {
    bpm: 120,
    key: a,
  },
  blocks: {
    bridge: {
      directives: {
        key: e,
      },
      blocks: {
        riff: {...}
      },
      sequence: [...]
    },
    chorus: {
      directives: {},
      blocks: {},
      sequence: [...]
    },
  },
  sequence: [...]
}
```
The `bridge` block could use the `chorus` block inside of its sequence and
vice versa, but the `chorus` block could not use the `riff` block, since it's
defined inside of the `bridge` block.

To get the above output from Melody, the program would look like: 

```
# bpm = 120
# key = a

$bridge {
  # key = e
  $riff {
    c g c g 
  }

  $riff a b
}

$chorus {
  c f g c f g
}

a b c $bridge $chorus
```

Children inherit their parents' directives, but they can override them.
`chorus` for example, will be in the key of A, because its parent has that
directive defined and it isn't overriden. `bridge` will be in the key of E
because it overrides the parent's `key` directive (though it will still be at 
120 bpm).

## Sequence
The `sequence` key on a block represents what actually needs to be played.
Items in the sequence can be a chord, which would look like:

```
[
  {
    note: 'a',
    octave: 4,
  },
  {
    note: 'c',
    octave: 5,
  },
  {
    note: 'e',
    octave: 5
  }
]
```

I think the way the grammar is right now, any number of notes is a chord, even
one, so even one note would still be an array.

A sequence can contain a block, which would be a reference to any blocks defined
in the current block, or any blocks defined in its parents. The sequence
defined on that block would be used to play the notes.