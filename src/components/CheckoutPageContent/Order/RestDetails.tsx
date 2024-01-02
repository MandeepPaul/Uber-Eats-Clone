const RestDetails = () => {
  return (
    <div className="flex justify-between items-center gap-4 pb-4">
      <img
        src="https://tb-static.uber.com/prod/image-proc/processed_images/e1244ff68a32fe72d9ee6345c724dcf6/97ef7458dde62fa918635bc21265d9f5.jpeg"
        className="h-10 w-10 rounded-full bg-green-500 "
      />
      <div className="flex flex-col grow">
        <span>A&W</span>
        <span className="text-sm text-gray-400">{`5 items`} </span>
      </div>
    </div>
  );
};

export default RestDetails;
