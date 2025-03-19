import "./right.css";
import RightTitle from "./RightTitle";
import RightPrice from "./RightPrice";
import RightSubImg from "./RightSubImg";

const Right = (props) => {
  const { handleColorChange } = props;
  return (
    <div className="rightbox">
      <RightTitle />
      <RightPrice />
      <RightSubImg handleColorChange={handleColorChange} />
    </div>
  );
};

export default Right;
