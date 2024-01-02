const RestDetails: React.FC<{
  restName: string;
  restImg: string;
  totalQuantity: number;
}> = ({ restImg, restName, totalQuantity }) => {
  return (
    <div className="flex justify-between items-center gap-4 pb-4">
      <img
        src={restImg}
        alt="Restaurant"
        className="h-10 w-10 rounded-full bg-green-500 "
      />
      <div className="flex flex-col grow">
        <span>{restName} </span>
        <span className="text-sm text-gray-400">
          {`${totalQuantity} items`}{" "}
        </span>
      </div>
    </div>
  );
};

export default RestDetails;
