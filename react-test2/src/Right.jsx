import "./right.css";
import RightTitle from "./RightTitle";
import RightPrice from "./RightPrice";
import RightSubImg from "./RightSubImg";

const Right = (props) => {
  const { handleColorChange, onThumbnailClick, prevImage, setHoveredImage } =
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
        onThumbnailClick={onThumbnailClick}
        prevImage={prevImage}
      />
    </div>
  );
};

export default Right;
