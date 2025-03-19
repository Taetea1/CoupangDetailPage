import "./left.css";
import LeftSubImg from "./LeftSubImg";
import LeftMainImg from "./LeftMainImg";

const Left = (props) => {
  const { mainImage, thumbnails, onThumbnailHover } = props;

  return (
    <div className="imgwrap">
      <LeftMainImg mainImage={mainImage} />
      <LeftSubImg thumbnails={thumbnails} onThumbnailHover={onThumbnailHover} />
    </div>
  );
};

export default Left;
