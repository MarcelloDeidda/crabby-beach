import { useState } from "react";

import classes from "./App.module.css";
import Game from "./components/Game";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return <>
    <button onClick={handleOpenModal} className={classes["modal-button"]}>&#9432;</button>
    <Game />
    {showModal && <Modal onClose={handleCloseModal} />}
  </>
}

export default App;
