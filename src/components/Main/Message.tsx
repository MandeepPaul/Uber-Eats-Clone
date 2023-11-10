const Message: React.FC<{ className?: string }> = (props) => {
  return (
    <div className={`${props.className} my-2`}>
      <h1 className="text-3xl font-bold mb-3 hidden md:block">All stores</h1>
      <section className=" grid grid-rows-2 grid-flow-col justify-start gap-x-2 md:justify-normal">
        <img
          className=" row-span-2 justify-self-center md:justify-self-end self-center h-[40px] md:h-[50px]"
          src="https://s3.amazonaws.com/uber-static/megaphone%403x.png"
          alt="Horn"
        />
        <h2 className="col-span-3 md:text-2xl md:col-span-4 md:font-semibold">
          Service Fees apply to delivery orders
        </h2>
        <a className="font-dosis col-span-3 font-semibold underline" href="...">
          How do fees work?
        </a>
      </section>
      <hr className="border-t-2 border-gray-200 my-4" />
    </div>
  );
};

export default Message;
