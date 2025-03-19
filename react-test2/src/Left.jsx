import "./left.css";
import LeftSubImg from "./LeftSubImg";
import LeftMainImg from "./LeftMainImg";

const Left = (props) => {
  const { mainImage, lists, hoverList } = props;
  return (
    <div className="imgwrap">
      <LeftMainImg mainImage={mainImage} />
      <LeftSubImg lists={lists} hoverList={hoverList} />
    </div>
  );
};

export default Left;
