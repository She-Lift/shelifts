import { Link } from "react-router";

export default function Footer() {
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
          REDO ATT TA NÄSTA STEG?
        </p>

        <h2 className="font-serif text-3xl md:text-4xl">
          Boka din plats idag.
        </h2>

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
          BOKA DIN PLATS →
        </Link>
      </section>
    </div>
  </footer>;
}