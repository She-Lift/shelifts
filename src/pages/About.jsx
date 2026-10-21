import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

const sweText = {
  "title": ["Starkare kvinnor,", "tillsammans."],
  "subText": "SHE LIFTS är en girls only strength club där vi tränar styrka, bygger självförtroende och skapar en gemenskap som lyfter – på riktigt.",
  "aboutSections": [
    {
      label: "GRUNDAREN",
      title: "Hej, jag heter",
      italicTitle: "Kristin.",
      paragraphs: [
        "Jag är personlig tränare med över 15 års erfarenhet av styrketräning.",
        "Jag startade SHE LIFTS för att skapa en plats där kvinnor kan träna styrka tillsammans i en miljö som känns trygg, motiverande och personlig."
      ]
    },
    {
      label: "MIN VISION",
      title: "Mer än bara",
      italicTitle: "träning.",
      paragraphs: [
        "SHE LIFTS är för kvinnor som vill bli starkare, bygga muskler, utveckla sin teknik och känna sig mer självsäkra i gymmet.",
        "Jag tror att styrka inte bara är fysiskt, utan också mentalt. Här handlar det om att utmana sig själv, stötta varandra och ha kul på vägen."
      ]
    },
    {
      label: "SÅ TRÄNAR VI",
      title: "Små grupper,",
      italicTitle: "stora resultat.",
      paragraphs: [
        "Träningen sker i små grupper med 8 deltagare, vilket gör att varje person får individuell coaching samtidigt som vi följer upp progression.",
        "Oavsett om du är nybörjare eller erfaren får du coaching, vägledning och en gemenskap som motiverar dig att fortsätta utvecklas."
      ]
    }
  ],
  "endText": "BLI EN DEL AV SHE LIFTS"
};

const engText = {
  "title": ["Stronger women,", "together."],
  "subText": "SHE LIFTS is a girls-only strength club where we train for strength, build self-confidence, and create a community that uplifts - for real.",
  "aboutSections": [
    {
      label: "THE FOUNDER",
      title: "Hi, my name is",
      italicTitle: "Kristin.",
      paragraphs: [
        "I am a personal trainer with over 15 years of experience in strength training.",
        "I started SHE LIFTS to create a space where women can do strength training together in an environment that feels safe, motivating, and personal."
      ]
    },
    {
      label: "MY VISION",
      title: "More than just",
      italicTitle: "exercise.",
      paragraphs: [
        "SHE LIFTS is for women who want to get stronger, build muscle, develop their technique, and feel more confident in the gym.",
        "I believe that strength is not just physical, but also mental. It’s about challenging yourself, supporting one another, and having fun along the way."
      ]
    },
    {
      label: "HOW WE TRAIN",
      title: "Small groups,",
      italicTitle: "big results.",
      paragraphs: [
        "Training takes place in small groups with 8 participants, ensuring that each person receives individual coaching while we track their progress.",
        "Whether you are a beginner or experienced, you receive coaching, guidance, and a community that motivates you to keep developing."
      ]
    }
  ],
  "endText": "BECOME PART OF SHE LIFTS"
};

export default function About() {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState(sweText);

  useEffect(() => {
    if (language == "sv") {
      setText(sweText);
    } else {
      setText(engText);
    }
  }, [language]);

  return <article className="w-full bg-background font-montserrat">

    <section className="
          px-6 pt-16 pb-12
          md:pt-24 md:pb-20
          text-center
        "
    >

      <h1 className="
            font-baskerville
            text-[clamp(2.4rem,6vw,4.5rem)]
            leading-[1.2]
            text-base-text
          "
      >
        {text.title[0]}
        <br />

        <span className="italic text-primary">
          {text.title[1]}
        </span>
      </h1>

      <div className="
            w-14 h-px
            bg-primary/50
            mx-auto my-7
          "
      />

      <p className="
            max-w-2xl mx-auto
            text-sm md:text-base
            leading-relaxed
            text-base-text/80
          "
      >{text.subText}</p>
    </section>

    <div className="max-w-6xl mx-auto px-6 md:px-12">

      {text.aboutSections.map((item) => (
        <section
          key={item.label}
          className="
              grid grid-cols-1
              lg:grid-cols-2
              gap-6 lg:gap-16
              py-12 md:py-16
            "
        >

          <div>
            <p className="
                  text-xs
                  font-semibold
                  tracking-[0.3em]
                  mb-4
                "
            >
              {item.label}
            </p>

            <h2 className="
                  font-baskerville
                  text-4xl md:text-5xl
                  leading-[1.25]
                  text-base-text
                "
            >
              {item.title}
              <br />

              <span className="italic text-primary">
                {item.italicTitle}
              </span>
            </h2>
          </div>

          <div className="
                lg:border-l
                lg:border-primary/15
                lg:pl-12

                flex flex-col
                justify-center
                gap-5

                text-sm md:text-base
                leading-relaxed
                text-base-text/80
              "
          >
            {item.paragraphs.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>

        </section>
      ))}

      <section className="
            border-t border-primary/15
            py-14 md:py-20
            flex flex-col
            items-center
            text-center
            gap-6
          "
      >
        <p className="
              text-xs font-semibold
              tracking-[0.25em]
            "
        >
          {text.endText}
        </p>

      </section>

    </div>
  </article>;
}