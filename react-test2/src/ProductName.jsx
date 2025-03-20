import { Rate } from "antd";
import "./ProductName.css";

const ProductName = () => {
  return (
    <div className="ratewrap">
      <div className="subtitle">토이게이트</div>
      <div className="titlebox">
        <div className="title">
          토이게이트 교습용 61키 실용형 디지털 피아노 TYPE T-B
        </div>
        <button className="heartbtn"></button>
        <button className="sharebtn"></button>
      </div>
      <div className="ratebox">
        <Rate allowHalf disabled defaultValue={4.5} />
        <div className="evalution">121개 상품평</div>
      </div>
    </div>
  );
};

export default ProductName;
