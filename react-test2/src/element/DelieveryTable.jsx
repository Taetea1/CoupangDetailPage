import ProductInfoMark from "./ProductInfoMark";
import React from "react";
import { data } from "../data/ProductDeliveryInfo";
import "./DelieveryTable.css";

const DelieveryTable = () => {
  return (
    <>
      <div className="deliever-title">배송정보</div>

      <div className="deliver-wrap">
        <div className="deliever-box">
          <div className="deliever-first">
            <ProductInfoMark
              subtitle={data.one.subtitle}
              content={data.one.content.split("<br/>").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            />
            <ProductInfoMark
              subtitle={data.two.subtitle}
              content={data.two.content.split("<br/>").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            />
          </div>
          <div className="deliever-second">
            <ProductInfoMark
              subtitle={data.three.subtitle}
              content={data.three.content.split("<br/>").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            />
          </div>
        </div>
        <ProductInfoMark
          subtitle={data.four.subtitle}
          content={data.four.content.split("<br/>").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        />
      </div>
    </>
  );
};

export default DelieveryTable;
