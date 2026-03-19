const Cell = { Dead: 0, Alive: 1 };

class Universe {
  static new() { return new Universe(); }
  width() { return 64; }
  height() { return 64; }
  tick() {}
  cells() { return 0; }
}

module.exports = { Universe, Cell };
