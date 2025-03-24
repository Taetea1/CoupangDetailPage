import { Rate } from "antd";
import ImgElement from "../element/ImgElement";
import { rateImg } from "../data/rateImg";
import "./ProductRate.css";

const ProductRate = () => {
  return (
    <div>
      <div className="product-rate-title-box">
        <div className="product-rate-title">상품평</div>
        <div className="ruleText">상품평 운영원칙</div>
      </div>
      <div className="product-rate-info">
        동일한 상품에 대해 작성된 상품평으로, 판매자는 다를 수 있습니다.
      </div>
      <div className="rateWrap">
        <Rate disabled value={4.5} className="my-custom-rate" />
        <div className="rateNumber">121</div>
        <div className="detail-view">자세히보기{">"}</div>
      </div>
      <div className="rateImgBox">
        {rateImg.map((item, i) => {
          return <ImgElement key={i} item={item.src} type={item.type} />;
        })}
      </div>
    </div>
  );
};

export default ProductRate;
