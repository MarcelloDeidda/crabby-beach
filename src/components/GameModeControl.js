import classes from "./GameModeControl.module.css";

const GameModeControl = props => {
    const { gameover, win, mode, markCount, onReset, onModeToggle } = props;
    const modeClasses = `${classes.mode} ${gameover ? classes["mode-gameover"] : win ? classes["mode-win"] : ""}`

    return <div className={modeClasses}>
        <div className={classes.info}>
            {gameover ? <p>GAMEOVER</p> : win ? <p>WIN</p> : <p>{markCount}/65 CRABS</p>}
        </div>
        <div className={classes.action}>
            <button disabled={gameover || win || mode === "explore"} onClick={() => onModeToggle("explore")}>Uncover</button>
            <button disabled={gameover || win || mode === "mark"} onClick={() => onModeToggle("mark")}>Flag</button>
        </div>
        <button onClick={onReset}>Reset</button>
    </div>
}

export default GameModeControl;