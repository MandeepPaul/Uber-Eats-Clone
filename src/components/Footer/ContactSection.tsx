const ContactSection = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-start">
      <div className="flex gap-2 my-3 text-sm lg:text-base">
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Instagram</div>
      </div>

      <div className="my-3 text-sm lg:text-base">
        <ul className="flex flex-col gap-2 lg:gap-4 lg:flex-none lg:grid lg:grid-cols-6 lg:justify-items-center">
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Pricing</li>
          <li className="lg:col-span-3 md:min-w-[300px]">
            Do not sell or share my personal information
          </li>
          <li className="lg:col-span-6 lg:justify-self-end">
            © 2023 Uber Technologies Inc.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactSection;
