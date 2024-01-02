import {
  favListActions,
  favStoreType,
  initialFavState,
} from "../Slices/favStores";
import { uiActions } from "../Slices/uiSlice";

export const addFavStore = (stores: favStoreType, changeFlag: boolean) => {
  return async (dispatch: any) => {
    if (changeFlag) {
      const receiveData = async () => {
        const response = await fetch(
          "https://reactiverse-2842e-default-rtdb.firebaseio.com/UberEatsClone/favStores.json"
        );
        if (!response.ok) {
          throw new Error("Receiving data failed!");
        }
        return await response.json();
      };
      try {
        const favStores = await receiveData();
        //If node in the database is completely null, them instead of receiving error, we retrieve empty cart.
        if (favStores === null) {
          dispatch(favListActions.replaceFavourite(initialFavState.list));
        } else {
          dispatch(favListActions.replaceFavourite(favStores.list));
        }
      } catch (error) {}
      return;
    }

    //This part for PUT request after first render
    if (stores.changeFlag) {
      const sendFavStores = async () => {
        const response = await fetch(
          "https://reactiverse-2842e-default-rtdb.firebaseio.com/UberEatsClone/favStores.json",
          {
            method: "PUT",
            body: JSON.stringify({
              list: stores.list,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Sending data failed!");
        }
      };

      try {
        await sendFavStores();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success",
            message: "Updated favourite stores list!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending favourite store data failed!",
          })
        );
      }
    }
  };
};
