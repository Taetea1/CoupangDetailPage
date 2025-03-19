import { useState } from "react";
import "./App.css";
import Left from "./Left";
import Right from "./Right";
import { product } from "./product"; // 이미지 데이터

const MainPage = () => {
  const [mainImage, setMainImage] = useState(product.black.main);
  const [thumbnails, setThumbnails] = useState(product.black.thumbnails);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [prevImage, setPrevImage] = useState(product.black.main);
  const [productNumber, setProductNumber] = useState(
    "6710871611 - 14799784162"
  );
  const handleThumbnailHover = (image) => {
    setHoveredImage(image);
    setPrevImage(image);
  };

  const handleColorChange = (color) => {
    setMainImage(product[color].main);
    setThumbnails(product[color].thumbnails);
    setHoveredImage(null);
    setPrevImage(null);
    setProductNumber(product[color].number);
  };

  return (
    <div className="flexbox">
      <Left
        mainImage={hoveredImage || mainImage}
        thumbnails={thumbnails}
        onThumbnailHover={handleThumbnailHover}
      />
      <Right
        handleColorChange={handleColorChange}
        prevImage={prevImage}
        setHoveredImage={setHoveredImage}
        productNumber={productNumber}
      />
    </div>
  );
};

export default MainPage;
