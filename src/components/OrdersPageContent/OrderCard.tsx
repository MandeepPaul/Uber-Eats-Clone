import Button from "../UI/Wrappers/Button";

const OrderCard = () => {
  return (
    <div className="py-2 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start lg:justify-between lg:py-4">
      <img
        className="py-2 h-[150px] w-full object-cover lg:py-0"
        src="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvODI4NzdlZjkzNTAzYzNkNmJjZmRiYjc1NzllNmQwOTEvYTcwZjVjOWRmNDQwZDEwMjEzZTkzMjQ0ZTllYjdjYWQuanBlZw=="
      />
      <div>
        <span className="py-2 text-2xl font-semibold">Punjab Food Corner</span>

        <p className="text-sm py-1 text-gray-400">{`9 items for $45.00 - Mar 16 at 1:05 a.m`}</p>
        <span className="underline underline-offset-2 text-sm">
          View receipt
        </span>

        <ul>
          <li className="py-2 flex justify-start items-center gap-4 font-light">
            <span className="border-[1px] px-1.5 text-sm">2</span>
            <span>Garlic Naan</span>
          </li>
        </ul>
      </div>
      <Button
        onClick={""}
        className="bg-black w-full py-4 rounded-lg md:text-lg lg:text-xl text-white hover:opacity-75"
      >
        View Store
      </Button>
    </div>
  );
};

export default OrderCard;
