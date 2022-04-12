import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home.js";
import Features from "./components/Features.js";
import UploadAndDisplayImage from "./components/Uploadpicture.js";
import Dialogbox from "./components/Dialogbox.js";
import axios from "axios";
import Gallery from "./components/gallery.js";
function App() {
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [showDialogBox, setDialogbox] = useState(null);
  useEffect(() => {
    setLocalStorage();
  }, []);
  const setLocalStorage = () => {
    localStorage.setItem("images", JSON.stringify({ images: [] }));
  };
  const getImage = () => {
    const images = JSON.parse(localStorage.getItem("images"));
    setImages(images.images);
  };
  function showHandler() {
    setDialogbox(true);
  }
  console.log(images);
  function hideHandler() {
    setDialogbox(false);
  }

  return (
    <div>
      <Navbar></Navbar>
      {showDialogBox && (
        <Dialogbox onClose={hideHandler} getImage={getImage}></Dialogbox>
      )}
      <Home onClick={showHandler}></Home>

      <Features></Features>
      <Gallery images={images}></Gallery>
    </div>
  );
}

export default App;
