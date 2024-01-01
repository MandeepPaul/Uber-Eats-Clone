import { useEffect } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Outlet } from "react-router-dom";
import { itemOrdered } from "../store/Slices/cartSlice";
import { sendCartData } from "../store/cartActions";

import { useAppSelector, useAppDispatch } from "../types/hooks";

let firstRender = true;

const RootPage = () => {
  const dispatch = useAppDispatch();
  const cart: itemOrdered = useAppSelector(
    (state: { cart: itemOrdered }) => state.cart
  );

  useEffect(() => {
    dispatch(sendCartData(cart, firstRender));

    if (firstRender) {
      firstRender = false;
    }
  }, [cart, dispatch]);

  return (
    <div className="max-w-[1440px] mx-auto font-ubermove">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
