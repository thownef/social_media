import { ROUTES } from "./utils/constants/ROUTES";
import Home from "./pages/Home/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Index";
import Video from "./pages/Video/Index";
import Marketplace from "./pages/Marketplace/Index";
import Group from "./pages/Group/Index";
import Gaming from "./pages/Gaming/Index";
import Layout from "./components/Layout/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.VIDEO} element={<Video />} />
          <Route path={ROUTES.MARKETPLACE} element={<Marketplace />} />
          <Route path={ROUTES.GROUP} element={<Group />} />
          <Route path={ROUTES.GAMING} element={<Gaming />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
