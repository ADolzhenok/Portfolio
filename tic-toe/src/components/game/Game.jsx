import React from "react";
import classes from "./Game.module.css";

/**
 * Rendering 3x3 board
 * 
 * @param {object} objects destructuring assignment of sended props  
 * @returns 
 */

const Game = ({
  boardArray,
  sign,
  setSign,
  count1,
  setCount1,
  count2,
  setCount2,
  player1,
  player2,
  setWin,
}) => {
  console.log("call Board");

  /**
   * Set X or O in the board
   * 
   * @param {number} btn Number of button 
   * @param {*} event to disabled the button
   */

  const action = (btn, event) => {
    boardArray[btn - 1] = sign;
    event.currentTarget.disabled = true;
    console.log(boardArray);
    if (sign === "X") {
      setSign("O");
    } else {
      setSign("X");
    }
  };

  /**
   * Checking win combinations
   * 
   * @param {string} le current letter in Sign
   */

  const checkBoard = (le) => {
    if (
      (boardArray[0] === le && boardArray[1] === le && boardArray[2] === le) ||
      (boardArray[0] === le && boardArray[3] === le && boardArray[6] === le) ||
      (boardArray[0] === le && boardArray[4] === le && boardArray[8] === le) ||
      (boardArray[5] === le && boardArray[2] === le && boardArray[8] === le) ||
      (boardArray[6] === le && boardArray[7] === le && boardArray[8] === le) ||
      (boardArray[3] === le && boardArray[4] === le && boardArray[5] === le) ||
      (boardArray[1] === le && boardArray[4] === le && boardArray[7] === le) ||
      (boardArray[2] === le && boardArray[4] === le && boardArray[6] === le)
    ) {
      console.log("winner");
      console.log("sighn = " + sign);
      if (sign === "X") {
        setCount1(count1 + 1);
        setWin('Winner : ' + player1);
      } else {
        setCount2(count2 + 1);
        setWin('Winner : ' + player2)
      }
      document.getElementById("board").style.pointerEvents = "none";
      document
        .querySelectorAll("button[disabled")
        .forEach((btn) => (btn.disabled = false));
    }
    else if (!boardArray.includes(false)){
      setWin('Draw')
      document.getElementById("board").style.pointerEvents = "none";
      document
      .querySelectorAll("button[disabled")
      .forEach((btn) => (btn.disabled = false));
    }
  };

  return (
    <center>
      <div id="board" className={classes.board}>
        <button
          id="btn1"
          className={classes.btn + " " + classes.left + " " + classes.top}
          onClick={(event) => {
            action(1, event);
            checkBoard(sign);
          }}
        >
          {boardArray[0]}
        </button>
        <button
          id="btn2"
          className={classes.btn + " " + classes.top}
          onClick={(event) => {
            action(2, event);
            checkBoard(sign);
          }}
        >
          {boardArray[1]}
        </button>
        <button
          className={classes.top + " " + classes.right + " " + classes.btn}
          onClick={(event) => {
            action(3, event);
            checkBoard(sign);
          }}
          id="btn3"
        >
          {boardArray[2]}
        </button>
        <button
          className={classes.btn + " " + classes.left}
          onClick={(event) => {
            action(4, event);
            checkBoard(sign);
          }}
          id="btn4"
        >
          {boardArray[3]}
        </button>
        <button
          className={classes.btn}
          onClick={(event) => {
            action(5, event);
            checkBoard(sign);
          }}
          id="btn5"
        >
          {boardArray[4]}
        </button>
        <button
          className={classes.btn + " " + classes.right}
          onClick={(event) => {
            action(6, event);
            checkBoard(sign);
          }}
          id="btn6"
        >
          {boardArray[5]}
        </button>
        <button
          className={classes.btn + " " + classes.left + " " + classes.bottom}
          onClick={(event) => {
            action(7, event);
            checkBoard(sign);
          }}
          id="btn7"
        >
          {boardArray[6]}
        </button>
        <button
          className={classes.btn + " " + classes.bottom}
          onClick={(event) => {
            action(8, event);
            checkBoard(sign);
          }}
          id="btn8"
        >
          {boardArray[7]}
        </button>
        <button
          className={classes.btn + " " + classes.bottom + " " + classes.right}
          onClick={(event) => {
            action(9, event);
            checkBoard(sign);
          }}
          id="btn9"
        >
          {boardArray[8]}
        </button>
      </div>
    </center>
  );
};

export default Game;
