import "./CoupangTag.css";

const CoupangTag = (props) => {
  const { name, type } = props;
  return (
    <>
      <li className="coupang-tag">
        <a href="">{name}</a>
      </li>
      {type !== "finary" ? <div className="division-box">{">"}</div> : <></>}
    </>
  );
};

export default CoupangTag;
