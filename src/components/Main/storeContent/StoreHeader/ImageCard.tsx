import Card from "../../../UI/Wrappers/ImageCard";
import Button from "../../../UI/Wrappers/Button";
import { FavHeartIcon, SearchIcon } from "../../../../SVG/svgIcon";

const ImageCard: React.FC<{ imageURL: string; logoURL?: string }> = ({
  imageURL,
  logoURL,
}) => {
  return (
    <Card className="w-full relative h-[130px] lg:h-[250px] " url={imageURL}>
      <div className="absolute top-2 lg:top-[90px] right-2 flex gap-2">
        <Button className="relative rounded-full h-11 w-11 overflow-hidden">
          <div className="absolute inset-0 bg-black blur-lg" />
          <span className="relative z-10 flex items-center justify-center w-full h-full">
            <SearchIcon
              className="px-1 lg:stroke-black"
              strokeColor="#FFFFFF"
              width="26px"
              height="26px"
            />
          </span>
        </Button>

        <Button className="relative rounded-full h-11 w-11 overflow-hidden">
          <div className="absolute inset-0 bg-black blur-lg" />
          <span className="relative z-10 flex items-center justify-center w-full h-full">
            <FavHeartIcon width="22px" height="22px" strokeWidth="2" />
          </span>
        </Button>
      </div>

      {/* Logo consition later */}
      <Card
        url="https://tb-static.uber.com/prod/image-proc/processed_images/c5342b3774c9ab58a05a4fd96af7e293/029e6f4e0c81c14572126109dfe867f3.jpeg"
        className="h-16 w-16 rounded-full absolute -bottom-[30%] left-1/2 transform translate-x-[-50%] lg:hidden"
      />
    </Card>
  );
};

export default ImageCard;
