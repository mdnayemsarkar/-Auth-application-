import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fst from "./First"
import Snd from "./Secound"
import Trd from "./Third"
import Fourth from "./Home"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home2"

function Routs() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Fst />,
    },

    {
        path: "1st",
        element: <Fst/>
      },

      {
        path: "2nd",
        element: <Snd/>
      },

      {
        path: "3rd",
        element: <Trd/>
      },

      {
        path: "4th",
        element: <Fourth/>
      },

      {
        path: "5th",
        element: <About/>
      },

      {
        path: "6th",
        element: <Contact/>
      },
      {
        path: "7th",
        element: <Home/>
      },
  ]);
  return <RouterProvider router={router} />;
}
export default Routs;
