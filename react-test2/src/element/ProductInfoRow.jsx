import ProductInfoMark from "./ProductInfoMark";
import "./productInfoRow.css";

const productInfoRow = (props) => {
  const { info } = props;
  return (
    <>
      <div className="product-info-mark">
        <ProductInfoMark subtitle={info.subtitle} content={info.content} />
        <ProductInfoMark subtitle={info.subtitle2} content={info.content2} />
      </div>
    </>
  );
};

export default productInfoRow;
