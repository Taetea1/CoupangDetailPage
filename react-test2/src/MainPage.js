import { useState } from "react";
import "./App.css";
import Left from "./Left";
import Right from "./Right";
import blackOne from "./img/blackOne.jpg";
import blackTwo from "./img/blackTwo.jpg";
import pinkOne from "./img/pinkOne.jpg";
import pinkTwo from "./img/pinkTwo.png";
import pinkThree from "./img/pinkThree.png";
import pinkFour from "./img/pinkFour.png";
import pinkFive from "./img/pinkFive.png";
import silverOne from "./img/silverOne.png";
import silverTwo from "./img/silverTwo.png";
import silverThree from "./img/silverThree.png";
import silverFour from "./img/silverFour.png";
import silverFive from "./img/silverFive.png";
import silverSix from "./img/silverSix.png";
import silverSeven from "./img/silverSeven.png";

// 각 색상에 맞는 이미지 객체
const product = {
  black: {
    main: blackOne,
    thumbnails: [blackTwo],
  },
  pink: {
    main: pinkOne,
    thumbnails: [pinkTwo, pinkThree, pinkFour, pinkFive],
  },
  silver: {
    main: silverOne,
    thumbnails: [
      silverTwo,
      silverThree,
      silverFour,
      silverFive,
      silverSix,
      silverSeven,
    ],
  },
};

const MainPage = () => {
  // 기본 메인 이미지를 첫 번째 색상의 "one" 이미지로 설정
  const [mainImage, setMainImage] = useState(product.black.main); // blackOne이 기본
  const [thumbnails, setThumbnails] = useState(product.black.thumbnails); // black의 썸네일들
  const [hoveredImage, setHoveredImage] = useState(null); // 임시로 바뀔 이미지 (오른쪽 색상 리스트 호버 시)

  // 썸네일 호버 시 메인 이미지 변경
  const handleThumbnailHover = (image) => {
    setHoveredImage(image);
  };

  // 썸네일 클릭 시 메인 이미지 고정
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  // 색상 선택 시 메인 이미지와 썸네일 리스트 변경
  const handleColorChange = (color) => {
    setMainImage(product[color].main); // 색상에 맞는 "one" 이미지로 변경
    setThumbnails(product[color].thumbnails);
  };

  return (
    <div className="flexbox">
      <Left
        mainImage={hoveredImage || mainImage} // 호버된 이미지가 있으면 그걸로, 없으면 기본 메인 이미지
        thumbnails={thumbnails}
        onThumbnailHover={handleThumbnailHover}
        onThumbnailClick={handleThumbnailClick}
      />
      <Right handleColorChange={handleColorChange} />
    </div>
  );
};

export default MainPage;
