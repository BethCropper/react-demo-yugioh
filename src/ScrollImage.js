import React, { useState } from "react";

export const ImageScroller = (images, name) => {
  const [cardImage, setCardImage] = useState(images[0]);

  const handleClick = (images, cardImage) => {
    if (cardImage.id === images.length - 1) {
      setCardImage(images[0]);
    } else {
      setCardImage(images[cardImage.id + 1]);
    }
  };

  return (
    <img
      onClick={function () {
        handleClick(images, cardImage);
      }}
      src={cardImage.url}
      alt={`The card art for the ${name} card`}
    ></img>
  );
};
