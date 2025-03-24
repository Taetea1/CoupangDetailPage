import "./Review.css";
import { Rate } from "antd";
import { reviewImg } from "../data/rateImg";
import ImgElement from "../element/ImgElement";

const Review = () => {
  return (
    <>
      {reviewImg.map((item, i) => {
        return (
          <div key={i} className="review-wrap">
            <div className="profile-wrap">
              <div className="review-proflie-img">
                <img src={item.profile} alt="프로필사진" />
              </div>
              <div>
                <div className="review-nick">
                  {item.nickname}
                  {item.group === "Experience" ? (
                    <img
                      className="coupang-Experience"
                      src={item.groupImg}
                      alt="쿠팡체험단"
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="rate-date">
                  <Rate disabled value={item.rate} />
                  <div className="date-review">{item.date}</div>
                </div>
                <div className="review-sale">판매자: 쿠팡(주)</div>
              </div>
            </div>

            <div className="review-product-name">{item.product}</div>

            <div className="review-image-box">
              {item.img.map((image, index) => {
                return (
                  <ImgElement key={index} item={image.src} type={image.type} />
                );
              })}
            </div>

            <div className="review-text">
              {item.content.map((text, index) => {
                return (
                  <div key={index}>
                    {text}
                    <br />
                    <br />
                  </div>
                );
              })}
            </div>
            <div className="help-wrap">
              <div className="help-box">
                <div className="help-review">{item.help}명에게 도움 됨</div>
                <div className="good-help">도움이 돼요</div>
                <div className="bad-help">도움이 안 돼요</div>
              </div>
              <div className="declare-text">신고하기</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Review;
