// import { uiActions } from "../Slices/uiSlice";
import { userActions, initialState, userDetails } from "../Slices/userSlice";

export const sendUserInfo = (user: userDetails, flag: boolean) => {
  return async (dispatch: any) => {
    if (flag) {
      const receiveUserInfo = async () => {
        const response = await fetch(
          "https://reactiverse-2842e-default-rtdb.firebaseio.com/UberEatsClone/userInfo.json"
        );

        if (!response.ok) {
          throw new Error("Receiving data failed!");
        }

        return await response.json();
      };

      try {
        const userData = await receiveUserInfo();

        //If node in the database is completely null, them instead of receiving error, we retrieve empty cart.
        if (userData === null) {
          dispatch(userActions.replaceInfo(initialState));
        } else {
          dispatch(userActions.replaceInfo(userData));
        }
      } catch (error) {}
      return;
    }
    if (user.changedFlag) {
      const sendData = async () => {
        const { changedFlag, ...rest } = user;
        const response = await fetch(
          "https://reactiverse-2842e-default-rtdb.firebaseio.com/UberEatsClone/userInfo.json",
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
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
  };
};
