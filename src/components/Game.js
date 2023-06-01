import { useEffect, useReducer } from "react";

import { gameStateReducer, initialGameState } from "../store/store";
import Board from "./Board";
import classes from "./Game.module.css";
import GameModeControl from "./GameModeControl";

const Game = () => {
    const [gameState, dispatchGame] = useReducer(gameStateReducer, initialGameState);

    const currentGame = gameState.board;
    const markedSquares = currentGame.reduce((a, col) => a.concat(col.filter(block => block.marked)), []);
    const { mode, gameover, win } = gameState;

    useEffect(() => {
        if (win || gameover) {
            return;
        }

        const boardIsFull = currentGame.every(col => col.every(block => block.show || block.marked));

        if (!boardIsFull) {
            return;
        }

        const checkMarks = markedSquares.every(block => block.value === "crab");

        if (checkMarks && markedSquares.length === 65) {
            dispatchGame({ type: "WIN" });
        }

    }, [gameover, win, markedSquares, currentGame]);

    const handleBlockStatusChange = (col, block, action) => {
        dispatchGame({ type: action, coordinates: [col, block] });
    }

    const handleModeToggle = mode => {
        dispatchGame({ type: "MODE_TOGGLE", mode });
    }

    const handleReset = () => {
        dispatchGame({ type: "RESET" });
    }

    const handleGameover = () => {
        dispatchGame({ type: "GAMEOVER" });
    }

    const gameClasses = `${classes.game} ${gameState.win ? classes["game-win"] : gameState.gameover ? classes["game-over"] : ""}`

    return <div className={gameClasses}>
        <GameModeControl
            onReset={handleReset}
            markCount={markedSquares.length}
            mode={mode}
            onModeToggle={handleModeToggle}
            gameover={gameover}
            win={win}
        />
        <Board
            onBlockStatusChange={handleBlockStatusChange}
            board={currentGame}
            mode={mode}
            onGameover={handleGameover}
            gameover={gameover}
            win={win}
        />
    </div>
}

export default Game;