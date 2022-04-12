import React, { useState } from "react";
import axios from "axios";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import classes from "./Uploadpicture.module.css";
const config = {
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
function UploadAndDisplayImage(props) {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleChange = async (e) => {
    var formData = new FormData();
    formData.append("image", selectedImage);
    const res = await axios.post("/api/image/upload", formData, config);
    const images = JSON.parse(localStorage.getItem("images"));
    images.images.push(res.data.path);
    localStorage.setItem("images", JSON.stringify(images));
    setSelectedImage(null);
    props.getImage();
    props.onClose();
  };

  return (
    <div className={classes.display}>
      <h3 className={classes.h3}>Upload and Display Image</h3>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            height={"200px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button className={classes.button} onClick={handleChange}>
            Upload
          </button>
          <button
            className={classes.button}
            onClick={() => setSelectedImage(null)}
          >
            Remove
          </button>
        </div>
      )}
      {!selectedImage && (
        <input
          type="file"
          name="myImage"
          accept=".png,.jpg,.jpeg"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      )}
      <button className={classes.button} onClick={props.onClose}>
        Cancel
      </button>
    </div>
  );
}

export default UploadAndDisplayImage;
