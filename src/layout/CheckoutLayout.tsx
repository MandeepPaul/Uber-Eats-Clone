import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../types/hooks";
import { userDetails } from "../store/Slices/userSlice";
import { sendUserInfo } from "../store/ActionCreators/userActions";
import Logo from "../components/Header/Logo";
import Footer from "../components/Footer/Footer";

const CheckoutLayout = () => {
  const dispatch = useAppDispatch();
  const userInfo: userDetails = useAppSelector((state) => state.userSlice);
  const firstRender = useRef(true);

  useEffect(() => {
    dispatch(sendUserInfo(userInfo, firstRender.current));

    if (firstRender.current) {
      firstRender.current = false;
    }
  }, [userInfo, dispatch]);

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
