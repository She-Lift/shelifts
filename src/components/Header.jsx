import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const sweText = {
  "button": "BOKA DIN PLATS",
  "nav": ["START", "TRÄNING", "MEDLEMSKAP", "KONTAKT", "OM MIG"]
};

const engText = {
  "button": "BOOK YOUR SPOT",
  "nav": ["START", "TRAINING", "MEMBERSHIP", "CONTACT", "ABOUT"]
};

export default function Header() {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState(sweText);

  useEffect(() => {
    if (language == "sv") {
      setText(sweText);
    } else {
      setText(engText);
    }
  }, [language]);

  return <header className="
      flex
      flex-col
      xl:flex-row
      xl:justify-around
      xl:items-center
      w-full
      px-4 py-4
    ">

    <div className="flex justify-around pb-8 xl:hidden">

      <section className="text-primary text-center">
        <h1 className="text-4xl font-black">
          SHE LIFTS
        </h1>

        <p className="text-xs font-semibold">
          GIRLS ONLY STRENGTH CLUB
        </p>

      </section>

      <section className="gap-6 items-center hidden sm:flex">

        <a href="https://www.instagram.com/shelifts.se" aria-label="Instagram" className="text-primary">
          <FaInstagram className="text-4xl" />
        </a>

        <Link to="/booking"
          className="
          bg-primary
          text-background
          py-2 px-6
          rounded-full
          font-semibold
        ">{text.button}</Link>

      </section>

    </div>

    <section className="text-primary text-center hidden xl:flex xl:flex-col">
      <h1 className="text-2xl lg:text-4xl font-black">
        SHE LIFTS
      </h1>

      <p className="text-xs font-semibold">GIRLS ONLY STRENGTH CLUB</p>

    </section>

    <nav className="
        text-base-text
        font-medium
        text-sm
        flex flex-wrap
        justify-around
        xl:gap-8
      ">
      <Link to="/" className="nav-link" >{text.nav[0]}</Link>
      <Link to="/training" className="nav-link" >{text.nav[1]}</Link>
      <Link to="/member" className="nav-link" >{text.nav[2]}</Link>
      <Link to="/contact" className="nav-link" >{text.nav[3]}</Link>
      <Link to="/about" className="nav-link" >{text.nav[4]}</Link>
    </nav>

    <section className="gap-6 items-center hidden xl:flex">

      <a href="https://www.instagram.com/shelifts.se" aria-label="Instagram" className="text-primary">
        <FaInstagram className="text-4xl" />
      </a>

      <Link to="/booking"
        className="
          bg-primary
          text-background
          py-2 px-6
          rounded-full
          font-semibold
        ">{text.button}</Link>

    </section>

  </header>;
}
