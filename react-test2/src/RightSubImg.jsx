import "./right.css";
import blackOne from "./img/blackOne.jpg";
import pinkOne from "./img/pinkOne.jpg";
import silverOne from "./img/silverOne.png";

const colors = {
  black: blackOne,
  pink: pinkOne,
  silver: silverOne,
};

const RightSubImg = (props) => {
  const { handleColorChange } = props;
  return (
    <div className="color-options">
      {Object.keys(colors).map((color) => (
        <img
          key={color}
          src={colors[color]}
          alt={color}
          className="color-option"
          onClick={() => handleColorChange(color)} // 색상 선택 시 메인 이미지와 썸네일 변경
        />
      ))}
    </div>
  );
};

export default RightSubImg;
