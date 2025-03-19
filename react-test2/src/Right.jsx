import "./right.css";
import RightTitle from "./RightTitle";
import RightPrice from "./RightPrice";
import RightSubImg from "./RightSubImg";
import RightInfo from "./RightInfo";
import { useState } from "react";

const Right = (props) => {
  const { handleColorChange, prevImage, setHoveredImage, productNumber } =
    props;

  const handleRightThumbnailHover = (image) => {
    setHoveredImage(image);
  };

  return (
    <div className="rightbox">
      <RightTitle />
      <RightPrice />
      <RightSubImg
        handleColorChange={handleColorChange}
        onThumbnailHover={handleRightThumbnailHover}
        prevImage={prevImage}
      />
      <RightInfo productNumber={productNumber} />
    </div>
  );
};

export default Right;
