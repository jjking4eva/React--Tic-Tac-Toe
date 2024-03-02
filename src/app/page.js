"use client";
import { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button 
    className="square" 
    onClick={onClick}>
      {value}
      </button>
  )

}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));//indicates there are 9 elements inside of squares
  const [xIsNext, setXIsNext] = useState(true);

  function onSquareClick(idx){
    if (squares[idx]) return;
    const newSquares = squares.slice();//.slice makes a copy of squares array
    newSquares[idx] = xIsNext ? "X" : "O" ;
    setXIsNext(!xIsNext);
    setSquares(newSquares);
  }

  return <>
    <p>Next Player: {xIsNext ? "X" : "O"}</p>
    <div className="squares-row">
      <Square value={squares[0]} onClick={() => onSquareClick(0)} />
      <Square value={squares[1]} onClick={() => onSquareClick(1)} />
      <Square value={squares[2]} onClick={() => onSquareClick(2)} />
    </div>
    <div className="squares-row">
      <Square value={squares[3]} onClick={() => onSquareClick(3)} />
      <Square value={squares[4]} onClick={() => onSquareClick(4)} />
      <Square value={squares[5]} onClick={() => onSquareClick(5)} />
    </div>
    <div className="squares-row">
      <Square value={squares[6]} onClick={() => onSquareClick(6)} />
      <Square value={squares[7]} onClick={() => onSquareClick(7)} />
      <Square value={squares[8]} onClick={() => onSquareClick(8)} />
    </div>
  </>
}//need to display different squares on squares

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a]=== squares[b] && squares[b] === squares[c]) {
      return squares[a];
     }
  }

  return null;
}

export default function Game() {
  return (
    <div>
      <Board />
    </div>
  )
} //used to display tic-tac-toe game