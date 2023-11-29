import Logo from "../Header/Logo";
import ContactSection from "./ContactSection";

const FooterLink: React.FC<{ href: string; src: string; alt: string }> = ({
  href,
  src,
  alt,
}) => (
  <a href={href}>
    <img className="w-[130px] h-10" src={src} alt={alt} />
  </a>
);

const FooterList: React.FC<{ items: string[]; className?: string }> = ({
  items,
  className,
}) => (
  <ul className={`flex flex-col gap-2 ${className}`}>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Footer = () => {
  const footerLinks = [
    {
      href: "..",
      src: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/783bb4a82e5be29e.svg",
      alt: "app-store-logo",
    },
    {
      href: "..",
      src: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/163bdc9b0f1e7c9e.png",
      alt: "play-store-logo",
    },
  ];

  const firstColumnItems = [
    "Get Help",
    "Buy gift cards",
    "Add your restaurant",
    "Sign up to deliver",
    "Create a business account",
  ];

  const secondColumnItems = [
    "Restaurants near me",
    "View all cities",
    "View all countries",
    "Pickup near me",
    "About Uber Eats",
  ];

  return (
    <footer className="mt-10 pb-10 font-light mx-4 lg:text-lg">
      <hr className="border-t-2 border-gray-200 my-4" />

      <div className=" lg:mx-8">
        <div className="lg:my-10">
          <div className="lg:flex lg:justify-between">
            <div className="lg:flex lg:flex-col lg:items-start lg:justify-between my-8">
              <Logo />
              <div className="flex gap-4 mt-10">
                {footerLinks.map((link, index) => (
                  <FooterLink
                    key={index}
                    href={link.href}
                    src={link.src}
                    alt={link.alt}
                  />
                ))}
              </div>
            </div>

            <div className="my-5 gap-3">
              <FooterList items={firstColumnItems} />
            </div>

            <div className="my-8 gap-3">
              <FooterList items={secondColumnItems} />
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-gray-200 my-4" />

        <ContactSection />
      </div>
    </footer>
  );
};

export default Footer;
