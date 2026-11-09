import { Link } from "react-router";
import { FaCalendarAlt, FaDumbbell, FaRegHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

export default function Home() {
  const { textData } = useContext(GlobalContext);
  const [text, setText] = useState(textData.home);

  return <article className="flex flex-col">
    <section className="
  relative isolate
  flex flex-col
  items-center md:items-start
  text-center md:text-left
  w-full overflow-hidden
  py-50 px-6 md:px-40 flex-1
  bg-[url('/images/Dumbbell1.png')]
  bg-no-repeat bg-cover bg-right
">

      <div className="relative w-fit max-w-full mb-10">

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -inset-12
            z-0
            rounded-full
            bg-radial
            from-white/90
            via-white/35
            to-transparent
            blur-3xl
          "
        />

        <div className="relative font-montserrat">

          <h1 className="text-primary text-6xl md:text-8xl font-black leading-none text-center">
            SHE
            <br />
            LIFTS
          </h1>

          <p className="text-white text-sm md:text-lg font-medium tracking-wider mt-2">
            <span className="underline decoration-[4px] decoration-primary underline-offset-[20px]">GIRLS</span> ONLY STRENGTH CLUB
          </p>

        </div>
      </div>

      <div className="relative z-10 text-white font-baskerville text-xl md:text-2xl">

        <p className="[word-spacing:0.2em]">
          <span className="font-black">SHE LIFTS</span> is a place where we
        </p>

        <p className="[word-spacing:0.2em]">
          <span className="italic">lift heavy, lift each other</span> and
        </p>

        <p className="[word-spacing:0.2em]">
          <span className="italic">have a ball</span> while doing it.
        </p>

        <Link
          to="/booking"
          className="
            inline-flex
            bg-primary
            text-background
            font-montserrat
            font-semibold
            text-lg
            mt-10
            py-4 px-8
            rounded-full
          "
        >{text.button}</Link>

      </div>

    </section>

    <section className="
    text-white bg-primary p-10
      flex flex-col md:flex-row
      divide-y md:divide-y-0 md:divide-x
      divide-white/50
      text-center
    ">
      {text.iconSection.map((item) => <section className="w-full md:w-1/4 pr-6 py-6 md:pr-8 md:py-8 flex flex-col items-center">
        {item.icon}
        <p className="font-bold py-2">{item.title}</p>
        <p className="font-light">{item.text}</p>
      </section>
      )}
    </section>
  </article>;
}
