const argv = require('yargs').argv;

class Game {
  constructor(player, computer) {
    this.validMoves = ['rock', 'paper', 'scissors'];
    this.players = [player, computer];
  }

  play() {
    console.log('Playing a game of Roshambo against the computer.');
    const playerTurn = this.players[0].takeTurn();
    const computerTurn = this.players[1].takeTurn();

    if (!this.validMoves.includes(playerTurn)) {
      return console.log('~Invalid player turn.~')
    }

    console.log(`Player plays ${playerTurn}!`);
    console.log(`Computer plays ${computerTurn}!`);

    if (playerTurn === computerTurn) {
      return console.log('~Tie game.~');
    }
    if (playerTurn === 'rock') {
      if (computerTurn === 'paper') {
        return console.log('~Computer wins.~');
      } else {
        return console.log('~Player wins.~');
      }
    }
    if (playerTurn === 'paper') {
      if (computerTurn === 'rock') {
        return console.log('~Player wins.~');
      } else {
        return console.log('~Computer wins.~');
      }
    }
    if (playerTurn === 'scissors') {
      if (computerTurn === 'rock') {
        return console.log('~Computer wins.~');
      } else {
        return console.log('~Player wins.~');
      }
    }
  }
}

class Player {
  constructor(move) {
    this.move = move;
  }

  takeTurn() {
    return this.move;
  }
}

class Computer {
  takeTurn() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random()*3)];
  }
}

const jordan = new Player(argv.move);
const beepBoop = new Computer;
const funTimes = new Game(jordan, beepBoop);

funTimes.play();
