import ProductInfoMark from "./ProductInfoMark";

const productInfoRow = (props) => {
  const { info } = props;
  return (
    <>
      <ProductInfoMark subtitle={info.subtitle} content={info.content} />
      <ProductInfoMark subtitle={info.subtitle2} content={info.content2} />
    </>
  );
};

export default productInfoRow;
