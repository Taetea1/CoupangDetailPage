import { Button, notification, InputNumber } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import calender from "./img/calender.png";
import delivery from "./img/delievery.png";
import check from "./img/check.png";
import coupaymoney from "./img/coupaymoney.png";
import card from "./img/card.png";
import bankbook from "./img/bankbook.png";
import "./ProductPrice.css";

const ProductPrice = () => {
  const [amount, setAmount] = useState(1);
  const [coupangPrice, setCoupangPrice] = useState(66000);
  const [wowPrice, setWowPrice] = useState(61000);
  const [orginPrice, setOrginPrice] = useState(83190);

  const [firstcoupang, setFirstcoupang] = useState(coupangPrice);
  const [firstWow, setFirstWow] = useState(wowPrice);
  const [firstorgin, setFirstorigin] = useState(orginPrice);

  useEffect(() => {
    setCoupangPrice(firstcoupang * amount);
    setWowPrice(firstWow * amount);
    setOrginPrice(firstorgin * amount);
  }, [amount]);
  return (
    <>
      <div className="originbox">
        <div>{Math.floor((orginPrice / coupangPrice) * 100 - 100)}%</div>
        <div className="orginprice">{orginPrice.toLocaleString()}원</div>
      </div>
      <div className="coupangbox">
        {coupangPrice.toLocaleString()}원 <span>쿠팡판매가</span>
      </div>
      <div className="pricebox">
        {wowPrice.toLocaleString()}원 <span>와우판매가</span>
      </div>

      <div className="infobox">
        이 상품은 <span>내일 도착, 무료배송</span>
        <img src={check} alt="체크" />
      </div>

      <div className="delivery-wrap">
        <div className="iconbox">
          <img className="icon" src={calender} alt="달력" />
        </div>

        <div className="green-text">내일(목) 3/20 도착 보장</div>
        <div className="small-text">(8분 내 주문 시 / 서울⋅경기 기준)</div>
        <div className="stick"></div>
        <div className="iconbox">
          <img className="icon" src={delivery} alt="배달" />
        </div>
        <div className="free-text">무료배송</div>
      </div>

      <div className="adjustbox">
        <div className="countbox">
          <div className="amount">{amount}</div>
          <div className="plus-minus-box">
            <div
              className="plus"
              onClick={() => {
                setAmount(amount + 1);
              }}
            >
              <UpOutlined style={{ fontSize: "70%" }} />
            </div>

            <div
              className="minus"
              onClick={() => {
                if (amount - 1 >= 1) {
                  setAmount(amount - 1);
                }
              }}
            >
              <DownOutlined style={{ fontSize: "70%" }} />
            </div>
          </div>
        </div>
        <Button className="cartbtn" type="primary" ghost>
          장바구니
        </Button>
        <Button
          className="nowbuy"
          onClick={() => {
            notification.info({
              message: "준비중입니다.",
            });
          }}
        >
          바로구매 {">"}
        </Button>
      </div>
      <div className="simplepay-wrap">
        <div className="simplepay">PC에서도 간편한 결제</div>
        <div className="payiconbox">
          <img className="payicon" src={coupaymoney} alt="쿠페이머니" />
          <div className="paytext">쿠페이머니</div>
        </div>
        <div className="payiconbox">
          <img className="payicon" src={card} alt="카드" />
          <div className="paytext">카드</div>
        </div>
        <div className="payiconbox">
          <img className="payicon" src={bankbook} alt="계좌이체" />
          <div className="paytext">계좌이체</div>
        </div>
      </div>
    </>
  );
};

export default ProductPrice;
