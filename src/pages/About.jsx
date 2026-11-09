import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";

export default function About() {
  const { textData } = useContext(GlobalContext);
  const [text, setText] = useState(textData.about);

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