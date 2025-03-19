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
  const { handleColorChange, onThumbnailHover } = props;
  return (
    <div className="color-options">
      {Object.keys(colors).map((color) => (
        <img
          key={color}
          src={colors[color]}
          alt={color}
          className="color-option"
          onMouseEnter={() => onThumbnailHover(colors[color])} // 호버 시 메인 이미지 변경
          onMouseLeave={() => onThumbnailHover(null)} // 마우스 떼면 원래 이미지로 복귀
          onClick={() => handleColorChange(color)} // 색상 선택 시 메인 이미지와 썸네일 변경
        />
      ))}
    </div>
  );
};

export default RightSubImg;
