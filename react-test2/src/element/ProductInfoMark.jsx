import "./ProductInfoMark.css";

const ProductInfoMark = (props) => {
  console.log(props);
  const { subtitle, content } = props;

  return (
    <>
      <div className="table-element-box">
        {subtitle ? (
          <>
            <div className="subtitles">{subtitle}</div>
            <div className="content">{content}</div>
          </>
        ) : (
          <>
            <div className="content"></div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductInfoMark;
