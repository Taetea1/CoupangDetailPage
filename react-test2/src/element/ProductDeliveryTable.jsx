import ProductInfoMark from "./ProductInfoMark";
import React from "react";
import "./ProductDelieveryTable.css";

const ProductDelieveryTable = (props) => {
  const { item } = props;

  return (
    <div className="table-info">
      <div className="deliever-title">{item.title}</div>
      {item.subcontent ? (
        <>
          <div className="subcontent">
            {item.subcontent?.split("<br/>").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}

      {item.info ? <div className="deliinfo">{item.info}</div> : ""}
      {item.subtitle.map((x, i) => (
        <div key={i}>
          <ProductInfoMark
            subtitle={x.sub}
            content={x.content.split("<br/>").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductDelieveryTable;
