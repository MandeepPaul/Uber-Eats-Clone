import OrderTypeToggle from "../../UI/OrderTypeToogle";
import AddressSection from "../../Overlays/DeliveryAddress/AddressSection";
import { LocationPinSVG, doorSVG } from "../../../SVG/svgIcon";
const Address = () => {
  const onButtonClick = (identifier: string) => {
    console.log(identifier);
  };

  return (
    <section className=" bg-white px-4 py-2">
      <div>
        <h2 className="text-3xl font-semibold pb-3">Checkout</h2>
        <OrderTypeToggle
          className="py-2 flex w-full"
          buttonPadding="px-[12px]"
        />
      </div>
      <AddressSection
        svg={LocationPinSVG}
        place="Home"
        description="Address..."
        buttonTitle="Edit"
        onClick={() => onButtonClick("address")}
      />
      <AddressSection
        svg={doorSVG}
        place="Leave at my door"
        description="Buzz-111"
        buttonTitle="Edit"
        onClick={() => onButtonClick("information")}
      />
    </section>
  );
};

export default Address;

/*
place
description
*/
