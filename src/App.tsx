import React, { useContext, useState } from "react";
import "./App.scss";
import { ConfirmModalContext } from "./contexts/ConfirmModalContext";

function App() {
  const modalContext = useContext(ConfirmModalContext);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const openModal = async () => {
    setMessage("");
    setErrorMessage("");
    try {
      await modalContext.openModal();
      setMessage("You successfully confirmed transaction!");
    } catch (error) {
      console.error(error);
      setErrorMessage("You rejected transaction...");
    }
  };
  return (
    <div className="App">
      <div className="App-container">
        <p>Hello world</p>
        {!!message && <p className="message">{message}</p>}
        <button onClick={openModal}>Open Modal</button>
        {!!errorMessage && <p className="message_error">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default App;
