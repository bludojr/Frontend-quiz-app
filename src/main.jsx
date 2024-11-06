import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import JS from "./pages/JS"
import Accessibility from "./pages/Accessibility";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} />
      <Route path="html" element={<HTML />} />
      <Route path="css" element={<CSS />} />
      <Route path="js" element={<JS />} />
      <Route path="accessibility" element={<Accessibility />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
