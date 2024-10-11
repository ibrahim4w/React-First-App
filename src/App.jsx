import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import Home from "./components/Home/Home";
import Portfoloi from "./components/Portfolio/Portfoloi";
import Layout from "./components/Layout/Layout";
import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  const routers = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/home", element: <Home /> },
        { path: "/", index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfoloi", element: <Portfoloi /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
