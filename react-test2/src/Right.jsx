import "./right.css";
import RightTitle from "./RightTitle";
import RightPrice from "./RightPrice";
import subElement from "./SubElement";

const Right = () => {
  return (
    <div className="rightbox">
      <RightTitle />
      <RightPrice />
      <subElement />
    </div>
  );
};

export default Right;
