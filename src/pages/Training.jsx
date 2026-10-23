import { FaDumbbell } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { GoGear } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const sweText = {
  "title": "TRÄNING",
  "header": ["Starkare kropp,", "star", "kare du."],
  "sub1": "På SHE LIFTS tränar vi styrketräning i små grupper där du får det bästa av två världar - personlig coaching och gemenskap.",
  "sub2": "Du följer ett strukturerat träningsupplägg med fokus på att bygga syrka, muskler och självförtroende. Vi tränar tillsammans, men du får fortfarande den individuella vägledning du behöver för att utvecklas.",
  "title2": "SÅ FUNGERAR DET",
  "numberSection": [
    {
      "number": "01",
      "subject": ["SMÅ", "GRUPPER"],
      "text": "Max 6 kvinnor per grupp. Det gör att jag kan se dig, korrigera din teknik och följa din utveckling - samtidigt som du får energi och gemenskapen från att träna tillsammans med andra."
    },
    {
      "number": "02",
      "subject": ["PER", "SONLIG COACHING"],
      "text": "Du får individuell vägledning varje pass. Jag hjälper dig med teknik, belastning, övningsutförande och progression.Målet är inte bara att du ska träna hårt - utan att du ska träna rätt."
    },
    {
      "number": "03",
      "subject": ["STR", "UKTURERAD TRÄNING"],
      "text": "Träningen är placerad i block så att du kan bygga styrka, utvecklas och faktiskt se dina resultat över tid."
    }
  ],
  "title3": ["Mer än ", "bara träning."],
  "sub3": "SHE LIFTS är för kvinnor som vill bygga muskler, bli starkare och känna sig mer självsäkra - både i gymmet och i vardagen.",
  "": "",
  "iconSection": [
    {
      "icon": <FaDumbbell className="text-6xl" />,
      "title": "BYGG MUSKLER",
      "text": ["Fokuserad och ", "effektiv styrketräning"]
    },
    {
      "icon": <GrLineChart className="text-6xl" />,
      "title": "BLI STARKARE",
      "text": ["Tydlig och progression ", "som utmanar dig."]
    },
    {
      "icon": <GoGear className="text-6xl" />,
      "title": "LÄR DIG TEKNIK",
      "text": ["Trygg och effektiv träning ", "med personlig coaching."]
    },
    {
      "icon": <FaPeopleGroup className="text-6xl" />,
      "title": "HA KUL",
      "text": ["Träning blir bättre ", "när man gör den tillsammans."]
    }
  ],
  "title4": "TRE MÅNADER",
  "header2": ["En tydlig ", "re", "sa framåt."],
  "sub4": "Hos SHE LIFTS tränar du i 3-månadersblock. Det ger oss tid att faktiskt bygga något - istället för att bara gå från pass till pass.",
  "steps": [
    {
      "number": "01",
      "title": "START",
      "description": "Vi lär känna din nivå och sätter grunden."
    },
    {
      "number": "02",
      "title": "BYGG",
      "description": "Vi ökar belastningen, förbättrar tekniken och bygger styrka."
    },
    {
      "number": "03",
      "title": "UTVECKLAS",
      "description": "Vi följer dina resultat och fortsätter utmana dig."
    }
  ],
};

const engText = {};

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

  return <div>
    
    <section className="flex justify-between p-10 sm:p-0 sm:pl-10">
      <div className="min-h-full lg:w-1/2  py-2 sm:py-20 max-w-[800px] self-center">
        <p className="font-medium text-md pb-2">{text.title}</p>
        <p className="font-baskerville text-4xl sm:text-7xl pb-4">{text.header[0]}</p>
        <p className="font-baskerville text-4xl italic text-primary sm:text-7xl pb-8"><span className="underline decoration-[4px] underline-offset-[20px]">{text.header[1]}</span>{text.header[2]}</p>

        <p className="pb-4 text-lg font-bold">{text.sub1}</p>
        <p className="text-lg">{text.sub2}</p>
      </div>
      <img className="w-1/2 bg-no-repeat bg-right 
      [mask-image:linear-gradient(to_right,transparent_0%,black_10%)]
      hidden sm:flex
      "
        src="/images/Bar.png"
        alt="Bar" />
    </section >

    <section className="p-10">
      <p className="font-medium text-base pt-6 pb-2">{text.title2}</p>
      <div className="
      flex flex-col lg:flex-row
      divide-y lg:divide-y-0 lg:divide-x
      divide-primary/50
    ">{text.numberSection.map((item) => <section className="w-full lg:w-1/3 py-6 lg:p-8">
        <p className="font-baskerville text-8xl text-primary">{item.number}</p>
        <p className="font-medium text-base pb-8">
          <span className="underline decoration-[4px] underline-offset-[20px] decoration-primary">{item.subject[0]}</span> {item.subject[1]}
        </p>
        <p>{item.text}</p>
      </section>
      )}
      </div>
    </section>

    <section className="text-white bg-primary p-10">
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <p className="font-baskerville text-5xl sm:text-7xl pb-8 lg:w-1/2">{text.title3[0]}<br />{text.title3[1]}</p>
        <p className="lg:w-1/2 text-xl">{text.sub3}</p>
      </div>

      <div className="
      flex flex-col md:flex-row
      divide-y md:divide-y-0 md:divide-x
      divide-white/50
      text-center
    ">{text.iconSection.map((item) => <section className="w-full md:w-1/4 pr-6 py-6 md:pr-8 md:py-8 flex flex-col items-center">
        {item.icon}
        <p className="font-bold py-2">{item.title}</p>
        <p className="font-medium">{item.text[0]} <br />{item.text[1]}</p>
      </section>
      )}
      </div>
    </section >

    <section className="
      grid grid-cols-1 lg:grid-cols-2
      gap-12 lg:gap-20
      bg-background
      px-6 py-12 lg:p-16
    ">
      <section className="">
        <p className="font-medium text-base pb-2">{text.title4}</p>
        <p className="font-baskerville text-primary text-5xl sm:text-7xl pb-8">
          {text.header2[0]}<br />
          <span className="italic"><span className="underline decoration-[4px] underline-offset-[24px]">{text.header2[1]}</span>{text.header2[2]}</span>
        </p>
        <p>{text.sub4}</p>
      </section>

      <section className="flex flex-col gap-8">
        {text.steps.map((step, index) => (
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
              {index < text.steps.length - 1 && (
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
