const Notification: React.FC<{
  title: string;
  message: string;
  status: string;
}> = ({ title, message, status }) => {
  let specialClasses = "";

  if (status === "default") {
    specialClasses = "bg-green-600 justify-center";
    message =
      " This project is created for educational purposes to showcase frontend development skills. It is not an official UberEats application. Any brand logos or trademarks used are solely for educational demonstration and do not imply endorsement.";
  }

  if (status === "error") {
    specialClasses = "bg-red-900";
  }
  if (status === "success") {
    specialClasses = "bg-green-600";
  }

  return (
    <section
      className={`h-4 p-4 z-60 flex justify-between items-center text-white bg-blue-500 overflow-hidden whitespace-nowrap ${specialClasses}`}
    >
      <div
        className={`w-full flex justify-between items-center ${
          status === "default" ? "inline-block animate-marquee gap-2" : ""
        }`}
      >
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </section>
  );
};

export default Notification;
