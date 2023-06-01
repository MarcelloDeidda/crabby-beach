import { populateBoard } from "../utils/utils";

export const initialGameState = {
    board: populateBoard(),
    mode: "explore",
    gameover: false,
    win: false
}

export const gameStateReducer = (state, action) => {
    let newState;

    switch (action.type) {
        case "CHANGE_STATUS":
            newState = { ...state, board: state.board.map(col => [...col]) };
            newState.board[action.coordinates[0]][action.coordinates[1]].show = true;
            return newState;

        case "MARK_TOGGLE":
            newState = { ...state, board: state.board.map(col => [...col]) };
            newState.board[action.coordinates[0]][action.coordinates[1]].marked = !state.board[action.coordinates[0]][action.coordinates[1]].marked;
            return newState;

        case "MODE_TOGGLE":
            newState = { ...state, board: state.board.map(col => [...col]) };
            newState.mode = action.mode;
            return newState;

        case "GAMEOVER":
            newState = { ...state, board: state.board.map(col => [...col]) };
            newState.gameover = true;
            return newState;

        case "WIN":
            newState = { ...state, board: state.board.map(col => [...col]) };
            newState.win = true;
            return newState;

        case "RESET":
            console.log("here")
            return {
                board: populateBoard(),
                mode: "explore",
                gameover: false,
                win: false
            }

        default:
            return {
                board: populateBoard(),
                mode: "explore",
                gameover: false,
                win: false
            }
    }
}