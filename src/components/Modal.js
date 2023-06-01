import React from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            <h1>CRABBY BEACH</h1>
            <p>In this beach-themed Minesweeper game with crabs, your objective is to uncover all the beach tiles without revealing any crabs.</p>
            <p>Click or tap on a hidden tile to uncover it. The numbers on the tiles indicate the number of neighboring tiles with crabs, which you can use to deduce safe tiles. Be careful not to click on a tile with a crab, as that ends the game.</p>
            <p>Win by uncovering all the tiles without revealing any crabs. To help your progress, you can right-click to flag potential crab tiles. Alternatively, toggle the Uncover and Flag buttons to change the click mode. Enjoy the game and have fun playing on the beach!</p>
            <p>This app was built by <a href="http:\\marcellodeidda.github.io" target="_blank">Marcello Deidda</a>, using React.js. Credits for the background picture go to <a href="https://unsplash.com/@alex_marchenko" target="_blank">Alexey Marchenko</a>.</p>
        </div>
        <button onClick={props.onClose}>Close</button>
    </div>
}

const portalElement = document.getElementById("overlays");

const Modal = props => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay onClose={props.onClose} />, portalElement)}
        </>
    );
}

export default Modal;