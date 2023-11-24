import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header className="mx-4" />
      <Outlet />
    </div>
  );
};

export default RootPage;
