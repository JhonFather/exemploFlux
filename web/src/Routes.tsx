import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PictureListing from "./pages/PictureListing";
import ImageDetails from "./pages/ImageDatails";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PictureListing />} />
        <Route path="/details/:id" element={<ImageDetails />} />
        <Route path="* " element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}
