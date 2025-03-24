import { CaretRightOutlined } from "@ant-design/icons";
import "./ImgElement.css";

const ImgElement = (props) => {
  const { item, type } = props;
  return (
    <div className="img-container">
      {type === "video" ? (
        <div className="overlay-container">
          <div className="blackImg"></div>
          <CaretRightOutlined className="custom-playicon" />
          <div className="video-time">0:14</div>
        </div>
      ) : type === "finary" ? (
        <div className="overlay-container">
          <div className="blackImg"></div>
          <div className="finary-number">409</div>
          <div className="finary-add">더보기{">"}</div>
        </div>
      ) : (
        <></>
      )}

      <img className="img-element-img" src={item} alt="상품이미지" />
    </div>
  );
};

export default ImgElement;
