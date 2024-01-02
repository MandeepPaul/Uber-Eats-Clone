import { Outlet } from "react-router-dom";
import Logo from "../components/Header/Logo";
import Footer from "../components/Footer/Footer";

const CheckoutLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <div className="h-14 bg-green-500" />
      <Logo className="absolute top-2 left-4" />
      <Outlet />
      <Footer />
    </div>
  );
};

export default CheckoutLayout;
