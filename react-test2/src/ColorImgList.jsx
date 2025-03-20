import { colors } from "./product"; // 색상별 이미지 데이터
import "./ColorImgList.css";

const ColorImgList = (props) => {
  const { changeColor, hoverRightList, prevImage } = props;

  const hoverColor = (color) => {
    hoverRightList(colors[color]);
  };

  const handleColorLeave = () => {
    hoverRightList(prevImage);
  };

  return (
    <div className="color-options">
      {Object.keys(colors).map((color) => (
        <img
          key={color}
          src={colors[color]}
          alt={color}
          className="color-option"
          onMouseEnter={() => hoverColor(color)}
          onMouseLeave={handleColorLeave}
          onClick={() => changeColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorImgList;
