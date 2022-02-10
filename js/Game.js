export default class Game {
  constructor() {
    this.turn = true;
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    this.turn = !this.turn;
  }

  makeMove(i) {
    if (!this.isInProgress() || this.board[i]) {
      return;
    }

    this.board[i] = this.turn;

    if (!this.getWin()) {
      this.nextTurn();
    }
  }

  getWin() {
    const pos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (const triple of pos) {
      const [a, b, c] = triple;

      if (this.board[a] != null &&
        this.board[a] === this.board[b] &&
        this.board[b] === this.board[c]) {
          return triple;
        }
    }
    return null;
  }

  isInProgress() {
    return !this.getWin() && this.board.includes(null);
  }
}