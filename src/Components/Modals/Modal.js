import React from "react";

import { ModalContext } from "./context";

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "blue"
};

const Modal = () => {
  return (
    <ModalContext.Consumer>
      {context => {
        if (context.showModal) {
          return (
            <div style={modalStyles}>
             
              <button onClick={context.toggleModal}>Hide Me</button>
            </div>
          );
        }

        return null;
      }}
    </ModalContext.Consumer>
  );
};

export default Modal;
