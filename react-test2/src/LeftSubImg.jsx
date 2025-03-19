const LeftSubImg = (props) => {
  const { thumbnails, onThumbnailHover, onThumbnailClick } = props;
  return (
    <div className="thumbnail-container">
      {thumbnails.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Thumbnail ${index}`}
          className="thumbnail"
          onMouseEnter={() => onThumbnailHover(img)} // 호버 시 메인 이미지 변경
          onMouseLeave={() => onThumbnailHover(null)} // 마우스 떼면 원래 이미지로 복귀
          onClick={() => onThumbnailClick(img)} // 클릭 시 메인 이미지 고정
        />
      ))}
    </div>
  );
};

export default LeftSubImg;
