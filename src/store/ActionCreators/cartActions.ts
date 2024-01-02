import { uiActions } from "../Slices/uiSlice";
import { cartActions, initialState, itemOrdered } from "../Slices/cartSlice";

export const sendCartData = (cart: itemOrdered, flag: boolean) => {
  return async (dispatch: any) => {
    //This part for GET request first time when component mount.
    if (flag) {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Receiving...",
          message: "Receiving cart data!",
        })
      );

      const receiveData = async () => {
        const response = await fetch(
          "https://reactiverse-2842e-default-rtdb.firebaseio.com/UberEatsClone/cart.json"
        );

        if (!response.ok) {
          throw new Error("Receiving data failed!");
        }

        return await response.json();
      };

      try {
        const cartData = await receiveData();

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Received",
            message: "Received cart data!",
          })
        );

        //If node in the database is completely null, them instead of receiving error, we retrieve empty cart.
        if (cartData === null) {
          dispatch(cartActions.replaceCart(initialState));
        } else {
          dispatch(cartActions.replaceCart(cartData));
        }
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Retrieving cart data failed!",
          })
        );
      }
      return;
    }

    // To prevent sending a cart data if it haven't changed locally.
    if (cart.changedFlag) {
      //This part for PUT request after first render.
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      const sendData = async () => {
        const { changedFlag, restImg, ...rest } = cart;
        const response = await fetch(
          "https://reactiverse-2842e-default-rtdb.firebaseio.com/UberEatsClone/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({
              ...rest,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Sending data failed!");
        }
      };

      try {
        await sendData();

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      }
    }
  };
};
