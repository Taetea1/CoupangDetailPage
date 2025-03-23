import { colors } from "./data/product"; // 색상별 이미지 데이터
import { useState } from "react";
import "./ColorImgList.css";

const ColorImgList = (props) => {
  const { changeColor, hoverRightList, prevImage } = props;
  const [clickColor, setClickColor] = useState("black");

  const hoverColor = (color) => {
    hoverRightList(colors[color]);
  };

  const handleColorLeave = () => {
    hoverRightList(prevImage);
  };

  const handleClick = (color) => {
    changeColor(color);
    setClickColor(color); // 클릭된 색상 업데이트
  };

  return (
    <div className="color-options">
      {Object.keys(colors).map((color) => (
        <img
          key={color}
          src={colors[color]}
          alt={color}
          className={`color-option ${clickColor === color ? "selected" : ""}`}
          onMouseEnter={() => hoverColor(color)}
          onMouseLeave={handleColorLeave}
          onClick={() => handleClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorImgList;
