const InputWidget = ({ content }) => {
    return (
      <div className="flex flex-col h-full items-start justify-center w-full">
        <label className=" mb-2">{content.label}</label>
        <input
          type="text"
          placeholder={content.placeholder}
          className="border border-gray-300 p-2 w-full"
        />
      </div>
    );
  };
  export default InputWidget;
  