import "./CoupangMainInfo.css";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ColorImgList from "./ColorImgList";
import DetailInfo from "./DetailInfo";

// 메인 정보들
const CoupangMainInfo = (props) => {
  const { changeColor, prevImage, setHoveredImage, productNumber } = props;

  const hoverRightList = (image) => {
    setHoveredImage(image);
  };

  return (
    <div className="rightbox">
      {/* 상품명 */}
      <ProductName />

      {/* 상품 가격 */}
      <ProductPrice />

      {/* 상품 색 */}
      <ColorImgList
        changeColor={changeColor}
        hoverRightList={hoverRightList}
        prevImage={prevImage}
      />

      {/* 상품 상세 내용 */}
      <DetailInfo productNumber={productNumber} />
    </div>
  );
};

export default CoupangMainInfo;
