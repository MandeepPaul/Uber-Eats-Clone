const ReusableSection: React.FC<{
  type: string;
  deliveryTime?: number | string;
  svg: React.FC<React.SVGProps<SVGSVGElement>>;
}> = ({ deliveryTime, type, svg: SVGComponent }) => {
  console.log(deliveryTime);
  return (
    <div className="flex justify-between items-center p-4 gap-4 border-2 rounded-lg min-h-[80px]">
      <SVGComponent width="20" height="20" />
      <div className="flex flex-col grow">
        <p>
          {type}{" "}
          {type === "Priority" && (
            <span className="text-white bg-green-700 px-2 py-0.5 text-sm rounded-full">
              Faster
            </span>
          )}
        </p>
        {deliveryTime && (
          <span className="text-sm text-gray-400">{`${deliveryTime}`}</span>
        )}{" "}
      </div>
      {type === "Priority" && <span>+$3.49</span>}
    </div>
  );
};

export default ReusableSection;
