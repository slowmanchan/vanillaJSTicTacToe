window.onload = function() {
  var gameState = {
    winner: false,
    turn: 'player1',
    winStates: [
      [1,2,3], [4,5,6], [7,8,9],
      [1,4,7], [2,5,8], [3,6,9],
      [1,5,9], [3,5,7]
    ],
    moves: {
      player1: [],
      player2: []
    }
  }
  var gameTitle = document.createElement('h1');
  gameTitle.style.textAlign = 'center';
  gameTitle.innerHTML = 'Vanilla JS TTT';
  var board = document.createElement('div');
  board.style.boxSizing = 'border-box';

  board.id = 'board';
  board.style.width = '200px';
  board.style.height = '200px';
  board.style.margin = 'auto';

  for (var i = 1; i < 10; i++) {
    var cell = document.createElement('div');

    cell.style.float = 'left';
    cell.style.width = '30%';
    cell.style.height = '30%';
    cell.style.borderStyle = 'solid';
    cell.style.borderColor = 'black';
    cell.style.fontSize = '3em';
    cell.style.textAlign = 'center';

    cell.id = 'cell' + i;
    board.append(cell);
  }

  board.addEventListener('click', addPiece);

  function addPiece(e) {
    if (!e.target.innerHTML) {
      if (gameState.turn == 'player1') {
        e.target.innerHTML = 'X';
        gameState.moves.player1.push(Number(e.target.id.slice(-1)));
        checkWin();
        gameState.turn = 'player2';

      } else {
        e.target.innerHTML = 'O';
        gameState.moves.player2.push(Number(e.target.id.slice(-1)));
        checkWin();

        gameState.turn = 'player1';
      }
    }
  }

  function checkWin() {
    for (var i = 0; i < gameState.winStates.length; i++) {
      var winningMoves = [];
      for (var j = 0; j < gameState.winStates[i].length; j++) {
        if (gameState.moves[gameState.turn].indexOf(gameState.winStates[i][j]) != -1) {
          winningMoves.push('W');
        }
        if (winningMoves.length == 3) {
          alert('winner ' + gameState.turn);
        }
      }
    }
  }

  root.append(gameTitle);
  root.append(board);
}
