import { useState } from 'react';
import Button from '@mui/material/Button';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const [isXturn, setIsXturn] = useState();

  const turnX = () => {
    setIsXturn(true);
  };
  const turnO = () => {
    setIsXturn(false);
  };

  // const [board,setBoard] = useState([0,1,2,3,4,5,6,7,8])
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [1, 4, 7],
      [0, 3, 6],
      [2, 5, 8]
    ];

    //if winning condition present in board then we have a winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null; //if no winner
  };

  const winner = decideWinner(board);

  const handleClick = (index) => {
    //create a copy of the board & then update the click box
    //update only untouched box & untill no winner
    if (winner === null && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);

      //toggle X turn
      setIsXturn(!isXturn);
    }
  };
  //reset the game
  const reset = () => {
    const boardCopy = [...board];
    setBoard(boardCopy);
    for (let i = 0; i < boardCopy.length; i++) {
      boardCopy[i] = null;
    }
  };
  //display who's turn
  const display = isXturn ? "X" : "O";


  return (
    <div className="fullGame">
      <h2>Select : X or O</h2>
      <div className="selectBtn">
        <Button variant="contained" color="success" onClick={turnX}>X</Button>
        <Button variant="contained" color="error" onClick={turnO}>O</Button>
      </div>
      <hr></hr>
      {winner ? " " : <h2> Next player : {display}</h2>}
      <hr></hr>
      {winner ? <Confetti width={width} height={height} gravity={0.05} /> : ""}
      <div className="board">
        {board.map((val, index) => (
          <GameBox key={index} val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>winner is {winner}</h2> : ""}
      <Button style={{ marginTop: "10px" }} variant="outlined" onClick={reset}>restart</Button>
    </div>
  );
}
function GameBox({ onPlayerClick, val }) {
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div style={styles} onClick={onPlayerClick} className="gameBox">
      {val}
    </div>
  );
}
