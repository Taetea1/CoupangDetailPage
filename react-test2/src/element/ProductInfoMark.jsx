import "./ProductInfoMark.css";

const ProductInfoMark = (props) => {
  console.log(props);
  const { subtitle, content } = props;

  return (
    <>
      {subtitle ? (
        <>
          <div className="table-element-box">
            <div className="subtitles">{subtitle}</div>
            <div className="content">{content}</div>
          </div>
        </>
      ) : (
        <>
          <div className="table-element-box">
            <div className="content"></div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductInfoMark;
