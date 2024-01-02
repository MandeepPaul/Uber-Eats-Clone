import { orderedItemFormat } from "../../../types/outgoingDataType";

const ItemSection: React.FC<orderedItemFormat> = ({
  itemName,
  quantity,
  price,
  condimentsData,
}) => {
  return (
    <section className="flex justify-between items-start gap-4 py-4">
      <span className="bg-gray-200 px-2">{quantity}</span>
      <div className="flex flex-col grow">
        <span className="font-medium ">{itemName}</span>
        {condimentsData &&
          condimentsData.map((data) => (
            <p key={data.id} className="text-sm text-gray-400">
              {`${data.title}: `}
              {data.list
                .map(({ conName, conPrice }) =>
                  conPrice ? `${conName}: ($${conPrice})` : conName
                )
                .join(", ")}
            </p>
          ))}
      </div>
      <span className="text-sm text-gray-600">{`$${price.toFixed(2)}`}</span>
    </section>
  );
};

export default ItemSection;
