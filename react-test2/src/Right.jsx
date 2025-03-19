import "./right.css";
import RightTitle from "./RightTitle";
import RightPrice from "./RightPrice";
import RightSubImg from "./RightSubImg";
import RightInfo from "./RightInfo";

const Right = (props) => {
  const { changeColor, prevImage, setHoveredImage, productNumber } = props;

  const hoverRightList = (image) => {
    setHoveredImage(image);
  };

  return (
    <div className="rightbox">
      <RightTitle />
      <RightPrice />
      <RightSubImg
        changeColor={changeColor}
        hoverRightList={hoverRightList}
        prevImage={prevImage}
      />
      <RightInfo productNumber={productNumber} />
    </div>
  );
};

export default Right;
