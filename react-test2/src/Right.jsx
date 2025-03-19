import "./right.css";
import RightTitle from "./RightTitle";
import RightPrice from "./RightPrice";
import RightSubImg from "./RightSubImg";

const Right = (props) => {
  const { handleColorChange, onThumbnailHover, onThumbnailClick } = props;
  return (
    <div className="rightbox">
      <RightTitle />
      <RightPrice />
      <RightSubImg
        handleColorChange={handleColorChange}
        onThumbnailHover={onThumbnailHover}
        onThumbnailClick={onThumbnailClick}
      />
    </div>
  );
};

export default Right;
