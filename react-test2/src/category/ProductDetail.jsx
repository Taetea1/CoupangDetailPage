import { detailImg } from "../data/productDetail";
import { useState } from "react";
import "./ProductDetail.css";
import ProductInfoTable from "../element/ProductInfoTables";

const ProductDetail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <ProductInfoTable />
      <div className="detail-box">
        <div className={`imageInfo ${isExpanded ? "expanded" : "fold"}`}>
          {detailImg.map((image, i) => {
            return <img key={i} src={image} alt="상세설명" />;
          })}
        </div>
        <button
          className="fold-btn"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "상품정보 접기" : "상품정보 더보기"}
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
