const ImageWidget = ({ content }) => {
    return (
        <img
            src={content}
            alt="Widget Image"
            className="w-full object-cover"
            // style={{ objectFit: 'cover' }}
        />
    );
};
  export default ImageWidget;
  