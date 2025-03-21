import ProductInfoRow from "./ProductInfoRow";
import "./ProductInfoTable.css";
import { essential } from "../data/productInfoTable";
import { useState } from "react";

const ProductInfoTable = () => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div className="detail-title">필수 표기정보</div>
      <div className={`product-mart ${expand ? "expand" : "folded"}`}>
        {essential.map((info, i) => (
          <div key={i} className="product-info-mark">
            <ProductInfoRow info={info} />
          </div>
        ))}
      </div>

      <button
        className={`${expand ? "displaynone" : "displayblock"}`}
        onClick={() => {
          setExpand(!expand);
        }}
      >
        필수 표기정보 더보기
      </button>
    </>
  );
};

export default ProductInfoTable;
