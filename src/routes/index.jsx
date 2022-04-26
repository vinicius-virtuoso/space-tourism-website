import { Routes, Route } from "react-router-dom";
import Crew from "../page/Crew";
import Destination from "../page/Destination";
import Home from "../page/Home";
import Technology from "../page/Technology";
import NotFound from "./../page/404";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
