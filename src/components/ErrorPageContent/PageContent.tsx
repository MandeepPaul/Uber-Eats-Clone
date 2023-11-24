import Logo from "../Header/Logo";
import MainContent from "./MainContent";

const PageContent: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <Logo className="absolute top-2 left-6" />
      <MainContent title={title} message={message} />
    </div>
  );
};

export default PageContent;
