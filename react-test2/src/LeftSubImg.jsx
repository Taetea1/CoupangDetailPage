const LeftSubImg = (props) => {
  const { thumbnails, onThumbnailHover } = props;
  return (
    <div className="thumbnail-container">
      {thumbnails.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Thumbnail ${index}`}
          className="thumbnail"
          onMouseEnter={() => onThumbnailHover(img)} // 호버 시 메인 이미지 변경
        />
      ))}
    </div>
  );
};

export default LeftSubImg;
