import "./right.css";
import { colors } from "./product"; // 색상별 이미지 데이터 임포트

const RightSubImg = (props) => {
  const { handleColorChange, onThumbnailHover, prevImage } = props;

  const handleColorHover = (color) => {
    onThumbnailHover(colors[color]);
  };

  const handleColorLeave = () => {
    onThumbnailHover(prevImage);
  };

  return (
    <div className="color-options">
      {Object.keys(colors).map((color) => (
        <img
          key={color}
          src={colors[color]}
          alt={color}
          className="color-option"
          onMouseEnter={() => handleColorHover(color)}
          onMouseLeave={handleColorLeave}
          onClick={() => handleColorChange(color)}
        />
      ))}
    </div>
  );
};

export default RightSubImg;
