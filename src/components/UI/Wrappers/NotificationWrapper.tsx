import { useEffect } from "react";
import Notification from "../Notification/Notification";
import { useAppSelector, useAppDispatch } from "../../../types/hooks";
import { uiActions } from "../../../store/Slices/uiSlice";

const NotificationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const { notification } = useAppSelector((state) => state.uiSlice);

  useEffect(() => {
    const defaultNotification = setTimeout(() => {
      dispatch(uiActions.defaultNotification());
    }, 3000);

    return () => {
      clearTimeout(defaultNotification);
    };
  }, [notification, dispatch]);

  return (
    <div className="bg-white max-w-[1440px] w-full flex flex-col lg:fixed lg:top-0 lg:z-20 lg:shadow-lg">
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {children}
    </div>
  );
};

export default NotificationWrapper;
