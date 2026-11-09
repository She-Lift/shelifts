import { Outlet } from "react-router";
import Header from "./components/structure/Header.jsx";
import Footer from "./components/structure/Footer.jsx";

export default function App() {
  return <div className="flex flex-col font-montserrat min-h-dvh w-full overflow-x-clip bg-background">
    <Header />

    <main className="flex-1 w-full min-w-0">
      <Outlet />
    </main>

    <Footer />
  </div>;
}
