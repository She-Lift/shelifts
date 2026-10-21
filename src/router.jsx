import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Training from "./pages/Training.jsx";
import Member from "./pages/Member.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "training",
        element: <Training />
      },
      {
        path: "member",
        element: <Member />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <Error />
      }

    ]
  }
]);

export default router;