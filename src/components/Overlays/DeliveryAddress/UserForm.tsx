import { Form } from "react-router-dom";
import { useState } from "react";
import Button from "../../UI/Wrappers/Button";
import { LocationPinSVG } from "../../../SVG/svgIcon";
import Input from "./Input";
import { useAppDispatch } from "../../../types/hooks";
import { userActions } from "../../../store/Slices/userSlice";

const UserForm: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const inputHandler = (value: string) => {
    setValue(value);
  };

  const submitValue = () => {
    dispatch(userActions.addDeliveryDetails(value));
    onReset && onReset();
  };
  return (
    <>
      <Form className="h-full m-4 p-4 space-y-6">
        <Input
          svg={LocationPinSVG}
          placeholder="Enter delivery address"
          setParentValue={inputHandler}
        />
      </Form>
      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={value === ""}
          className="bg-black w-[94%] py-4 my-6 rounded-md text-xl text-white hover:opacity-75 disabled:opacity-75 disabled:cursor-not-allowed"
          onClick={submitValue}
        >
          Done
        </Button>
      </div>
    </>
  );
};

export default UserForm;
