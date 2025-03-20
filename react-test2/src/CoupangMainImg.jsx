import "./CoupangMainImg.css";
import SubImgList from "./SubImgList";
import MainImg from "./MainImg";

// 메인 이미지
const CoupangMainImg = (props) => {
  const { mainImage, lists, hoverList } = props;
  return (
    <div className="imgwrap">
      <MainImg mainImage={mainImage} />
      <SubImgList lists={lists} hoverList={hoverList} />
    </div>
  );
};

export default CoupangMainImg;
