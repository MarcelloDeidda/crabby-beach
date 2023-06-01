import Block from "./Block";
import classes from "./Board.module.css";

const Board = props => {
    const boardContent = props.board.map(row => {
        return <div className={classes.row}>{row.map(block => {
            return <Block
                onBlockStatusChange={props.onBlockStatusChange}
                value={block.value}
                show={block.show}
                coordinates={block.coordinates}
                mode={props.mode}
                marked={block.marked}
                onGameover={props.onGameover}
                gameover={props.gameover}
                win={props.win}
            />;
        })}</div>
    });

    const boardClasses = `${classes.board} ${props.gameover && classes["board-gameover"]}`;

    return <div className={boardClasses}>
        {boardContent}
    </div>
}

export default Board;