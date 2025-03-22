import "./ConfirmInfo.css";

const ConfirmInfo = (props) => {
  const { item } = props;

  return (
    <>
      <div className="confirm-box">
        <div className="confirm-img">
          <img src={item.src} alt="인증" />
        </div>
        <div className="confirm-info-wrap">
          <div className="confirm-title-box">
            <div>{item.title}</div>
            <a href={item.href}>{item.bluetext}</a>
          </div>
          <div className="confirm-content">{item.content}</div>
        </div>
      </div>
    </>
  );
};

export default ConfirmInfo;
