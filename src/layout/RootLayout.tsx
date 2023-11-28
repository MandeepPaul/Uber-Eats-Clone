import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-ubermove">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
