import Home from "./Home";
import HotNews from "./HotNews";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Home />
      <HotNews />
    </div>
  );
};

export default Main;
