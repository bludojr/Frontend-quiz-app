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
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />} />
      <Route path="HTML" element={<HTML />} />
      <Route path="CSS" element={<CSS />} />
      <Route path="JavaScript" element={<JS />} />
      <Route path="Accessibility" element={<Accessibility />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
