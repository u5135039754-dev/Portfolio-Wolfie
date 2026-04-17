import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./Components/Home";

export const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
      </Route>
      {/* <Route path="*" element={<ErrorNotification />} /> */}
    </Routes>
  </BrowserRouter>
);