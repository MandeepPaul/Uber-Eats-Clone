import Modal from "../../UI/Backdrop/Modal";
import Button from "../../UI/Wrappers/Button";
import { CrossIcon } from "../../../SVG/svgIcon";
import UserForm from "./UserForm";

const EditUserInfo: React.FC<{ onReset: () => void }> = ({ onReset }) => {
  return (
    <Modal
      reset={onReset}
      modal="top-20 h-[40%] mx-auto max-w-xl inset-x-0 font-ubermove"
    >
      <div className="font-medium relative h-full flex flex-col justify-between">
        <div>
          <Button
            className="block absolute top-3 left-3 rounded-full hover:bg-slate-200 p-2"
            onClick={onReset}
          >
            <CrossIcon />
          </Button>

          <h1 className="text-center text-xl p-3 lg:text-4xl lg:font-semibold lg:text-start lg:pt-14">
            Delivery details
          </h1>
        </div>

        <UserForm onReset={onReset} />
      </div>
    </Modal>
  );
};

export default EditUserInfo;
