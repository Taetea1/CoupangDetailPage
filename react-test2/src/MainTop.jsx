import CoupangMainImg from "./CoupangMainImg";
import CoupangMainInfo from "./CoupangMainInfo";
import { useState } from "react";
import { product } from "./data/product"; // 이미지 데이터

const MainTop = () => {
  const [mainImage, setMainImage] = useState(product.black.main); // 메인 이미지
  const [lists, setLists] = useState(product.black.lists); // 각 리스트 이미지들
  const [hoveredImage, setHoveredImage] = useState(null); //호버된 이미지
  const [prevImage, setPrevImage] = useState(product.black.main); //호버 되기 전 왼쪽 부분 이미지
  const [productNumber, setProductNumber] = useState(
    "6710871611 - 14799784162"
  ); //상품 번호
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const hoverList = (image) => {
    setHoveredImage(image);
    setPrevImage(image);
  };

  const changeColor = (color) => {
    setHoveredIndex(0);
    setMainImage(product[color].main);
    setLists(product[color].lists);
    setHoveredImage(null);
    setPrevImage(null);
    setProductNumber(product[color].number);
  };

  return (
    <>
      {/* 쿠팡 상세페이지-설명 */}
      <CoupangMainInfo
        changeColor={changeColor}
        prevImage={prevImage}
        setHoveredImage={setHoveredImage}
        productNumber={productNumber}
      />

      {/* 쿠팡 상세페이지-이미지 */}
      <CoupangMainImg
        hoveredIndex={hoveredIndex}
        setHoveredIndex={setHoveredIndex}
        mainImage={hoveredImage || mainImage}
        lists={lists}
        hoverList={hoverList}
      />
    </>
  );
};

export default MainTop;
