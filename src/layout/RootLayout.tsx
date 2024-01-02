import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { itemOrdered } from "../store/Slices/cartSlice";
import { sendCartData } from "../store/ActionCreators/cartActions";
import { useAppSelector, useAppDispatch } from "../types/hooks";
import { addFavStore } from "../store/ActionCreators/favActions";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootPage = () => {
  const dispatch = useAppDispatch();
  const cart: itemOrdered = useAppSelector((state) => state.cart);
  const favStores = useAppSelector((state) => state.favSlice);

  const firstRender = useRef(true);
  const firstRendering = useRef(true);

  useEffect(() => {
    dispatch(sendCartData(cart, firstRender.current));

    if (firstRender.current) {
      firstRender.current = false;
    }
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(addFavStore(favStores, firstRendering.current));

    if (firstRendering.current) {
      firstRendering.current = false;
    }
  }, [favStores, dispatch]);

  return (
    <div className="max-w-[1440px] mx-auto font-ubermove">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootPage;
