import { useEffect } from "react";

import classes from "./Block.module.css";

const Block = props => {
    const { value, show, marked, coordinates, mode, gameover, win, onBlockStatusChange, onGameover } = props;

    useEffect(() => {
        if (value === 0 && show === true) {
            for (let i = coordinates[0] - 1; i <= coordinates[0] + 1; i++) {
                for (let j = coordinates[1] - 1; j <= coordinates[1] + 1; j++) {
                    if (i < 0 || j < 0 || i >= 20 || j >= 20) {
                        continue;
                    }
                    onBlockStatusChange(i, j, "CHANGE_STATUS");
                }
            }
        }
    }, [show, value, coordinates]);

    const handleClick = () => {
        if (show || gameover || win) {
            return;
        }
        if (mode === "explore" && !marked) {
            onBlockStatusChange(...coordinates, "CHANGE_STATUS");
            if (value === "crab") {
                onGameover();
            }
        } else if (mode === "mark") {
            onBlockStatusChange(...coordinates, "MARK_TOGGLE");
        }
    }

    const handleRightClick = e => {
        e.preventDefault();
        if (show || gameover) {
            return;
        }
        onBlockStatusChange(...coordinates, "MARK_TOGGLE");
    }

    let blockClasses = `${classes.block} ${show ? classes[`block-${value}`] : marked ? classes["block-marked"] : !gameover && !win ? (mode === "explore" ? classes["block-active-explore"] : [classes["block-active-mark"]]) : ""}`

    return <div
        className={blockClasses}
        onClick={handleClick}
        onContextMenu={handleRightClick}
    >
        {show ? (value === "crab" ? <p>&#129408;</p> : <p>{value}</p>) : marked ? <p>?</p> : null}
    </div>
}

export default Block;