import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { favHeartIcon } from "../../../SVG/svgIcon";

const ImageCard = () => {
  return (
    <Card
      className="w-full relative h-[130px] lg:h-[250px] rounded-none "
      url="https://tb-static.uber.com/prod/image-proc/processed_images/e1244ff68a32fe72d9ee6345c724dcf6/719c6bd2757b08684c0faae44d43159d.jpeg"
    >
      <div className="absolute top-2 right-2 bg-green-500">
        <div className="flex gap-2">
          <Button className="bg-black">{favHeartIcon}</Button>
          <Button className="bg-gray-200">{favHeartIcon}</Button>
        </div>
      </div>

      <Card
        url="https://tb-static.uber.com/prod/image-proc/processed_images/c5342b3774c9ab58a05a4fd96af7e293/029e6f4e0c81c14572126109dfe867f3.jpeg"
        className="h-16 w-16 bg-yellow-500 rounded-full absolute -bottom-[30%] left-1/2 transform translate-x-[-50%]"
      />
    </Card>
  );
};

export default ImageCard;
