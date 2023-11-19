import { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideNav from "./components/Main/SideNav/SideNav";

function App() {
  const [sideNavigation, setVisibility] = useState(false);

  const openSideNav = () => {
    sideNavigation ? setVisibility(false) : setVisibility(true);
  };
  const closeSideNav = () => {
    setVisibility(false);
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <Header className="mx-4" onClick={openSideNav} />
      <Main className="mx-8" />
      {sideNavigation &&
        ReactDOM.createPortal(
          <SideNav onReset={closeSideNav} />,
          document.getElementById("back-drop") as Element
        )}
    </div>
  );
}

export default App;
