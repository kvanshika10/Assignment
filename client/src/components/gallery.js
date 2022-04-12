import React from "react";
import Imgix from "react-imgix";

function Gallery(props) {
  console.log("Images", props.images);
  return (
    <div className="gallery">
      {props.images.map((image, idx) => (
        <Imgix
          sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="m-3"
          src={image}
          key={idx}
          imgixParams={{
            fit: "crop",
            fm: "jpg",
          }}
          width="150"
          height="150"
        />
      ))}
    </div>
  );
}

export default Gallery;
