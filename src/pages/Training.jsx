import { FaDumbbell } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const sweText = {
  "": "",
};

const engText = {
  "": "",
};

export default function Training() {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState(sweText);

  useEffect(() => {
    if (language == "sv") {
      setText(sweText);
    } else {
      setText(engText);
    }
  }, [language]);

  const steps = [
    {
      number: "01",
      title: "START",
      description: "Vi lär känna din nivå och sätter grunden."
    },
    {
      number: "02",
      title: "BYGG",
      description: "Vi ökar belastningen, förbättrar tekniken och bygger styrka."
    },
    {
      number: "03",
      title: "UTVECKLAS",
      description: "Vi följer dina resultat och fortsätter utmana dig."
    }
  ];

  return <div>
    <section className="flex justify-between p-10 sm:p-0 sm:pl-10">
      <div className="min-h-full lg:w-1/2  py-2 sm:py-20 max-w-[800px] self-center">
        <p className="font-medium text-md pb-2">TRÄNING</p>
        <p className="font-baskerville text-4xl sm:text-7xl pb-4">Starkare kropp,</p>
        <p className="font-baskerville text-4xl italic text-primary sm:text-7xl pb-8"><span className="underline decoration-[4px] underline-offset-[20px]">star</span>kare du.</p>

        <p className="pb-4 text-lg font-bold">På SHE LIFTS tränar vi styrketräning i små grupper där du får det bästa av två världar - personlig coaching och gemenskap.</p>
        <p className="text-lg">Du följer ett strukturerat träningsupplägg med fokus på att bygga syrka, muskler och självförtroende.
          Vi tränar tillsammans, men du får fortfarande den individuella vägledning du behöver för att utvecklas.</p>
      </div>
      <img className="w-1/2 bg-no-repeat bg-right 
      [mask-image:linear-gradient(to_right,transparent_0%,black_10%)]
      hidden sm:flex
      "
        src="/images/Bar.png"
        alt="Bar" />
    </section >

    <section className="p-10">
      <p className="font-medium text-base pt-6 pb-2">SÅ FUNGERAR DET</p>
      <div className="
      flex flex-col lg:flex-row
      divide-y lg:divide-y-0 lg:divide-x
      divide-primary/50
    ">
        <section className="w-full lg:w-1/3 lg:pr-6 py-6 lg:pr-8 lg:py-8">
          <p className="font-baskerville text-8xl text-primary">01</p>
          <p className="font-medium text-base pb-8">
            <span className="underline decoration-[4px] underline-offset-[20px] decoration-primary">SMÅ</span> GRUPPER
          </p>
          <p>
            <span className="italic">Max 6 kvinnor per grupp. </span>
            Det gör att jag kan se dig, korrigera din teknik och följa
            din utveckling - samtidigt som du får energi och gemenskapen
            från att träna tillsammans med andra.
          </p>
        </section>

        <section className="w-full lg:w-1/3 py-6 lg:p-6 lg:p-8">
          <p className="font-baskerville text-8xl text-primary">02</p>
          <p className="font-medium text-base pb-8">
            <span className="underline decoration-[4px] underline-offset-[20px] decoration-primary">PER</span>SONLIG COACHING
          </p>
          <p>
            Du får individuell vägledning varje pass. Jag hjälper dig med
            teknik, belastning, övningsutförande och progression. Målet är
            inte bara att du ska träna hårt - utan att du ska träna rätt.
          </p>
        </section>

        <section className="w-full lg:w-1/3 py-6 lg:pl-6 lg:pl-8 lg:py-8">
          <p className="font-baskerville text-8xl text-primary">03</p>
          <p className="font-medium text-base pb-8">
            <span className="underline decoration-[4px] underline-offset-[20px] decoration-primary">STR</span>UKTURERAD TRÄNING
          </p>
          <p>
            Träningen är placerad i block så att du kan bygga styrka,
            utvecklas och faktiskt se dina resultat över tid.
          </p>
        </section>
      </div>
    </section>

    <section className="text-white bg-primary p-10">
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <p className="font-baskerville text-5xl sm:text-7xl pb-8 lg:w-1/2">Mer än <br />bara träning.</p>
        <p className="lg:w-1/2 text-xl">
          SHE LIFTS är för kvinnor som vill bygga muskler, bli starkare
          och känna sig mer självsäkra - både i gymmet och i vardagen.
        </p>
      </div>

      <div className="
      flex flex-col md:flex-row
      divide-y md:divide-y-0 md:divide-x
      divide-white/50
      text-center
    ">
        <section className="w-full md:w-1/4 pr-6 py-6 md:pr-8 md:py-8 flex flex-col items-center">
          <FaDumbbell className="text-6xl" />
          <p className="font-bold py-2">BYGG MUSKLER</p>
          <p className="font-medium">Fokuserad och <br />effektiv styrketräning</p>
        </section>

        <section className="w-full md:w-1/4 p-6 md:p-8 flex flex-col items-center">
          <GrLineChart className="text-6xl" />
          <p className="font-bold py-2">BLI STARKARE</p>
          <p className="font-medium">Tydlig och progression <br />som utmanar dig.</p>
        </section>

        <section className="w-full md:w-1/4 p-6 md:p-8 flex flex-col items-center">
          <GoGear className="text-6xl" />
          <p className="font-bold py-2">LÄR DIG TEKNIK</p>
          <p className="font-medium">Trygg och effektiv träning <br />med personlig coaching.</p>
        </section>

        <section className="w-full md:w-1/4 pl-6 py-6 md:pl-8 md:py-8 flex flex-col items-center">
          <FaPeopleGroup className="text-6xl" />
          <p className="font-bold py-2">HA KUL</p>
          <p className="font-medium">Träning blir bättre <br />när man gör den <br />tillsammans.</p>
        </section>

      </div>
    </section >

    <section className="
      grid grid-cols-1 lg:grid-cols-2
      gap-12 lg:gap-20
      bg-background
      px-6 py-12 lg:p-16
    ">

      <section className="">
        <p className="font-medium text-base pb-2">TRE MÅNADER</p>
        <p className="font-baskerville text-primary text-5xl sm:text-7xl pb-8">
          En tydlig <br />
          <span className="italic"><span className="underline decoration-[4px] underline-offset-[24px]">re</span>sa framåt.</span>
        </p>
        <p>Hos SHE LIFTS tränar du i 3-månadersblock. Det ger oss tid att faktiskt bygga något - istället för att bara gå från pass till pass.</p>
      </section>

      <section className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="
              grid
              grid-cols-[20px_56px_minmax(0,1fr)]
              sm:grid-cols-[20px_88px_minmax(0,1fr)]
              gap-x-4 sm:gap-x-6
            "
          >

            <div className="relative flex justify-center">
              {index < steps.length - 1 && (
                <div className="
                  absolute
                  left-1/2 top-4 -bottom-12
                  w-px
                  -translate-x-1/2
                  bg-primary/40
                " />
              )}
              <div className="
                relative z-10
                mt-2
                size-4
                rounded-full
                border border-primary/50
                bg-background
              " />
            </div>

            <p className="
              font-baskerville
              text-5xl sm:text-7xl
              text-primary
              leading-none
            ">
              {step.number}
            </p>

            <div className="min-w-0">
              <h3 className="
                font-montserrat
                font-semibold
                tracking-widest
                text-sm sm:text-base
                mb-2
              ">
                {step.title}
              </h3>

              <p className="
                text-sm sm:text-base
                leading-relaxed
              ">
                {step.description}
              </p>
            </div>
          </div>
        ))}

      </section>
    </section>

  </div >;
}
