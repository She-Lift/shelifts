import { BsBarChart } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { Link } from "react-router";

export default function Member() {
  const questions = [
    {
      question: "Hur fungerar betalningen?",
      answer: "Här skriver du hur betalningen fungerar."
    },
    {
      question: "Kan jag byta tid under mitt träningsblock?",
      answer: "Här beskriver du reglerna för att byta tid."
    },
    {
      question: "Vad händer om jag missar ett pass?",
      answer: "Här skriver du vad som gäller vid frånvaro."
    },
    {
      question: "Hur många är det i varje grupp?",
      answer: "Vi tränar i små grupper med max 6 deltagare."
    },
    {
      question: "Behöver jag ha tidigare erfarenhet av styrketräning?",
      answer: "Här beskriver du vilka förkunskaper som behövs."
    },
    {
      question: "Vad ingår i medlemskapet?",
      answer: "Här beskriver du vad medlemskapet innehåller."
    }
  ];

  return <div>
    <section className="flex justify-between p-10 sm:p-0 sm:pl-10">
      <div className="min-h-full lg:w-1/2  py-2 sm:py-20 max-w-[800px] self-center">
        <p className="font-medium text-md pb-2">MEDLEMSKAP</p>
        <p className="font-baskerville text-4xl sm:text-7xl pb-4">Välj ditt</p>
        <p className="font-baskerville text-4xl italic text-primary sm:text-7xl pb-8"><span className="underline decoration-[4px] underline-offset-[20px]">trä</span>ningsblock.</p>
        <p className="text-lg font-bold">Samma tjejer | Samma coach | Tydlig progression</p>
        <p className="text-lg">Våra medlemskap är skapade för att ge dig kontinuitet, struktur och resultat - i en trygg och motiverande miljö.</p>
      </div>
      <img className="w-1/2 bg-no-repeat bg-right 
      [mask-image:linear-gradient(to_right,transparent_0%,black_10%)]
      hidden sm:flex
      "
        src="/images/OpenArea.png"
        alt="OpenArea" />
    </section >

    <section className="flex flex-col lg:flex-row p-10 gap-8">

      <div className="lg:w-1/2 flex flex-col items-center bg-form rounded-2xl pb-8">
        <img className="rounded-t-2xl mb-8" src="/images/Dumbbell1.png" alt="" />
        <p className="font-baskerville text-5xl sm:text-7xl pb-4 text-primary">BAS</p>
        <p className="text-lg font-semibold sm:text-2xl pb-4 text-primary tracking-[12px] underline decoration-[4px] underline-offset-[20px]">MEDLEMSKAP</p>
        <p className="text-lg font-semibold sm:text-2xl py-4 tracking-[6px]">1 PASS / VECKAN</p>
        <p className="text-md font-medium sm:text-xl pt-4 md:pb-4 sm:w-1/2 text-center">För dig som vill bygga styrka och utvecklas med personlig tränare en gång  veckan.</p>

        <section className="
              text-primary py-10 text-xs md:text-base
              text-center
              md:w-full
              grid grid-cols-1 md:grid-cols-3
              divide-y md:divide-y-0 md:divide-x
              divide-primary/20
              ">
          <div className="flex flex-col items-center gap-2 py-4">
            <FaPeopleGroup className="text-6xl" />
            <p className="font-medium text-base-text">MAX 6 <br />DELTAGARE</p>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <BsBarChart className="text-6xl" />
            <p className="font-medium text-base-text">PERSONLIG <br />COACHING</p>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <GoGear className="text-6xl" />
            <p className="font-medium text-base-text">STRUKTURERAD <br />TRÄNING</p>
          </div>
        </section>

        <p className="font-baskerville text-4xl sm:text-7xl pb-4 text-primary">2 995 kr</p>
        <p className="text-lg sm:text-2xl pb-4 text-primary tracking-[6px]">/ 3 MÅNADER</p>

        <Link
          to="/booking"
          className="
            bg-primary
            text-background
            font-montserrat
            font-semibold
            text-md
            text-center
            py-4 px-8
            rounded-full
            w-4/5
          "
        >
          BOKA DIN PLATS →
        </Link>
      </div>

      <div className="lg:w-1/2 flex flex-col items-center bg-form rounded-2xl pb-8">
        <img className="rounded-t-2xl mb-8" src="/images/Dumbbell1.png" alt="" />
        <p className="font-baskerville text-5xl sm:text-7xl pb-4 text-primary">FULL</p>
        <p className="text-lg font-semibold sm:text-2xl pb-4 text-primary tracking-[12px] underline decoration-[4px] underline-offset-[20px]">MEDLEMSKAP</p>
        <p className="text-lg font-semibold sm:text-2xl py-4 tracking-[6px]">3 PASS / VECKAN</p>
        <p className="text-md font-medium sm:text-xl pt-4 md:pb-4 sm:w-1/2 text-center">För dig som vill prioritera din träning och göra SHE LIFTS till en självklar del av din vardag.</p>

        <section className="
              text-primary py-10 text-xs md:text-base
              text-center
              md:w-full
              grid grid-cols-1 md:grid-cols-3
              divide-y md:divide-y-0 md:divide-x
              divide-primary/20
              ">
          <div className="flex flex-col items-center gap-2 py-4">
            <FaPeopleGroup className="text-6xl" />
            <p className="font-medium text-base-text">MAX 6 <br />DELTAGARE</p>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <BsBarChart className="text-6xl" />
            <p className="font-medium text-base-text">PERSONLIG <br />COACHING</p>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <GoGear className="text-6xl" />
            <p className="font-medium text-base-text">STRUKTURERAD <br />TRÄNING</p>
          </div>
        </section>

        <p className="font-baskerville text-4xl sm:text-7xl pb-4 text-primary">4 595 kr</p>
        <p className="text-lg sm:text-2xl pb-4 text-primary tracking-[6px]">för 12 veckor</p>

        <Link
          to="/booking"
          className="
            bg-primary
            text-background
            font-montserrat
            font-semibold
            text-md
            py-4 px-8
            rounded-full
            w-4/5
            text-center
          "
        >
          BOKA DIN PLATS →
        </Link>
      </div>

    </section>

    <section className="
        grid grid-cols-1 lg:grid-cols-2
        gap-10 lg:gap-20
        bg-form
        px-6 py-16 md:px-16 lg:px-20
      "
    >
      <div className="flex flex-col justify-center">
        <p className="
          font-montserrat
          text-md font-semibold
          tracking-[0.3em]
          mb-4
        ">
          VANLIGA FRÅGOR
        </p>

        <h2 className="
          font-baskerville
          text-4xl md:text-8xl
          text-base-text
          py-6
        ">
          Har du frågor?
        </h2>

        <div className="w-12 h-2 bg-base-text mt-6" />
      </div>

      <div>
        {questions.map((item, index) => (
          <details
            key={index}
            className="
              group
              border-b border-primary/20
            "
          >
            <summary
              className="
                flex items-center justify-between
                gap-4
                cursor-pointer
                list-none
                py-4
                font-montserrat
                font-semibold
                text-sm md:text-base
                hover:text-primary
                transition-colors

                [&::-webkit-details-marker]:hidden
              "
            >
              <span>{item.question}</span>

              <span
                aria-hidden="true"
                className="
                  relative
                  w-4 h-4
                  shrink-0
                  text-primary
                "
              >
                <span
                  className="
                    absolute
                    top-1/2 left-0
                    w-full h-px
                    bg-current
                    -translate-y-1/2
                  "
                />

                <span
                  className="
                    absolute
                    left-1/2 top-0
                    w-px h-full
                    bg-current
                    -translate-x-1/2
                    transition-transform
                    duration-300
                    group-open:rotate-90
                  "
                />
              </span>
            </summary>

            <p className="
              pb-5
              pr-8
              text-sm md:text-base
              text-base-text/70
              leading-relaxed
            ">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  </div>;
}
