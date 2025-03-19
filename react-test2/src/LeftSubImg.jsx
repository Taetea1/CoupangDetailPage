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
          onMouseEnter={() => onThumbnailHover(img)}
        />
      ))}
    </div>
  );
};

export default LeftSubImg;
