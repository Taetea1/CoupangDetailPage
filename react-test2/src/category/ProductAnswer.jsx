import "./ProductAnswer.css";

const ProductAnswer = (props) => {
  const { item } = props;

  return (
    <div>
      <div
        className={item.type === "question" ? "question-wrap" : "answer-wrap"}
      >
        <div className="qna-info">
          <div className="qna-user">
            <div className={item.type === "question" ? "question" : ""}>
              {item.type === "question" ? (
                "질문"
              ) : (
                <>
                  <div className="reply-icon"></div>
                  <div className="answer"> 답변</div>
                </>
              )}
            </div>
            <div className="user-product">{item.product}</div>
          </div>
          <div className="user-date">{item.date}</div>
        </div>
        <div
          className={`qna-content ${
            item.type === "question" ? "" : "answer-content"
          }`}
        >
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default ProductAnswer;
