import ProductInfoRow from "./ProductInfoRow";
import "./ProductInfoTable.css";
import { essential } from "../data/productInfoTable";

const productInfoTable = () => {
  return (
    <>
      <div className="detail-title">필수 표기정보</div>
      {essential.map((info, i) => (
        <div key={i} className="product-info-mark">
          <ProductInfoRow info={info} />
        </div>
      ))}
    </>
  );
};

export default productInfoTable;
