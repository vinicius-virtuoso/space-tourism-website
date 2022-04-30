import { Routes, Route } from "react-router-dom";
import Crew from "../page/Crew";
import Destination from "../page/Destination";
import Home from "../page/Home";
import NotFound from "../page/NotFound";
import Technology from "../page/Technology";

const MainRoutes = ({ data }) => {
  const { destinations, crew, technology } = data;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/destination"
        element={<Destination destinations={destinations} />}
      />
      <Route path="/crew" element={<Crew crew={crew} />} />
      <Route
        path="/technology"
        element={<Technology technology={technology} />}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
