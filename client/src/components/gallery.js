import React from "react";
import Imgix from "react-imgix";
import classes from './gallery.module.css'

function Gallery(props) {
  console.log("Images", props.images);
  return (
    
    <div className={classes.gallery}>
    {props.images.length==0&&<p className={classes.p}>No Images found ! </p>}
   
      {props.images.map((image, idx) => (
        <Imgix
          sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`m-3 ${classes.img}`}
          src={image}
          key={idx}
          imgixParams={{
            fit: "crop",
            fm: "jpg",
          }}
         
        />
      ))}
    </div>
  );
}

export default Gallery;
