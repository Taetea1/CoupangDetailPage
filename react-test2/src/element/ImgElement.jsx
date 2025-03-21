const ImgElement = () => {
  const { type } = props;

  return (
    <div>
      <img src={src} alt="상품이미지" />
    </div>
  );
};

export default ImgElement;
