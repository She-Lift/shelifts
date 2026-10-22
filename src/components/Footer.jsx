import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { GlobalContext } from "../GlobalContext";

const sweText = {
  "title": ["REDO ATT TA NÄSTA STEG?", "Boka din plats idag."],
  "button": "BOKA DIN PLATS →"
}

const engText = {
  "title": ["READY TO TAKE THE NEXT STEP?", "Book your spot today."],
  "button": "BOOK YOUR SPOT →"
}

export default function Footer() {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState(sweText);

  useEffect(() => {
    if (language == "sv") {
      setText(sweText);
    } else {
      setText(engText);
    }
  }, [language]);

  return <footer
    className="
      relative
      isolate
      w-full
      min-h-56
      md:min-h-64
      bg-[url('/images/Dumbbell2.png')]
      bg-cover
      bg-center
      bg-no-repeat
      overflow-hidden
      text-white
    "
  >
    <div
      className="
        absolute inset-0
        bg-black/60
        bg-linear-to-r
        from-black/10
        via-black/40
        to-black/80
        md:bg-none
      "
    />
    <div
      className="
        relative z-10
        flex
        min-h-56
        md:min-h-64
        w-full
        items-center
        justify-center
        md:justify-end
        px-6
        md:px-16
        py-8
      "
    >
      <section
        className="
          flex flex-col
          items-center
          text-center
          gap-3
        "
      >
        <p
          className="
            text-xs
            font-semibold
            tracking-[0.25em]
          "
        >
          {text.title[0]}
        </p>

        <h2 className="font-serif text-3xl md:text-4xl">{text.title[1]}</h2>

        <Link
          to="/booking"
          className="
            bg-primary
            text-white
            text-xs
            font-semibold
            tracking-widest
            rounded-full
            px-8
            py-3
            mt-2
            hover:brightness-125
            transition
          "
        >
          {text.button}
        </Link>
      </section>
    </div>
  </footer>;
}