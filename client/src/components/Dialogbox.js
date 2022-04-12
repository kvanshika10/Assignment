import classes from "./Dialogbox.module.css";
import Card from "./Layout/Card.js";
import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";
import UploadAndDisplayImage from "./Uploadpicture.js";

function Dialogbox(props) {
  function Backdrop() {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  }

  function Modal() {
    return (
      <Card className={classes.modal}>
        <UploadAndDisplayImage
          getImage={props.getImage}
          onClose={props.onClose}
        ></UploadAndDisplayImage>
      </Card>
    );
  }

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal onClose={props.onClose}></Modal>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default Dialogbox;
