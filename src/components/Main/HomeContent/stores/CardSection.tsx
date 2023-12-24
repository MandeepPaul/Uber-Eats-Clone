import { Istores } from "../../../../fireStoreData/StoreList";

interface StoreDetailsProps
  extends Pick<Istores, "name" | "rating" | "deliveryFee" | "time"> {}

const CardSection: React.FC<StoreDetailsProps> = ({
  name,
  rating,
  deliveryFee,
  time,
}) => {
  return (
    <>
      <div className="flex items-center justify-between mt-1">
        <p className="font-medium">{name}</p>
        <p className="text-xs rounded-full bg-stone-200 p-1">{rating}</p>
      </div>
      <div className="font-light text-sm flex gap-1 items-center">
        <img
          src="https://cn-geo1.uber.com/static/mobile-content/membership/uberone_ccc3x.png"
          alt="uber_one_logo"
          className="h-4 w-4"
        />
        <p>
          {`$ ${deliveryFee} . `}
          <span className="text-gray-600">{`${time}min`}</span>
        </p>
      </div>
    </>
  );
};

export default CardSection;
