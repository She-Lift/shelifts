import { useContext, useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GlobalContext } from "../GlobalContext.jsx";

const sweText = [
  "KONTAKT",
  ["H", "ör av dig."],
  ["Har du frågor om medlemskap, träning eller vill komma i kontakt med oss?", "Fyll i formuläret så svarar vi så snart vi kan."],
  ["Namn *", "E-post *", "Ämne *", "Meddelande *"],
  "SKICKA MEDDELANDE →",
  [
    {
      "title": "E-POST",
      "text": "info@shelifts.se"
    },
    {
      "title": "INSTAGRAM",
      "text": "@shelifts.se"
    },
    {
      "title": "PLATS",
      "text": "Malmö, Limhamn"
    }
  ]
];

const engText = [
  "CONTACT",
  ["G", "et in touch"],
  ["Do you have questions about membership or training, or would you like to get in touch with us?", "Fill out the form and we will respond as soon as we can."],
  ["Name *", "E-post *", "Subject *", "Message *"],
  "SEND MESSAGE →",
  [
    {
      "title": "E-POST",
      "text": "info@shelifts.se"
    },
    {
      "title": "INSTAGRAM",
      "text": "@shelifts.se"
    },
    {
      "title": "PLACE",
      "text": "Malmö, Limhamn"
    }
  ]
];

export default function Contact() {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState(sweText);

  useEffect(() => {
    if (language == "sv") {
      setText(sweText);
    } else {
      setText(engText);
    }
  }, [language]);

  return <article className="flex min-h-dvh gap-4 justify-center lg:justify-between lg:items-center">
    <section className="min-h-full lg:w-1/2 px-10 sm:pr-0 py-2 sm:py-20 max-w-[1000px]">
      <p className="font-medium text-md pb-2">{text[0]}</p>
      <p className="font-baskerville text-5xl sm:text-7xl pb-8"><span className="underline decoration-[4px] underline-offset-[20px]">{text[1][0]}</span>{text[1][1]}</p>
      <p className="pb-8 text-lg">
        {text[2][0]}
        <br />
        {text[2][1]}
      </p>

      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input className="border rounded-sm border-form-border p-3 w-1/2"
            type="text"
            placeholder={text[3][0]}
            required
          />
          <input className="border rounded-sm border-form-border p-3 w-1/2"
            type="email"
            placeholder={text[3][1]}
            required
          />
        </div>
        <input className="border rounded-sm border-form-border p-3"
          type="text"
          placeholder={text[3][2]}
          required
        />
        <textarea className="border rounded-sm border-form-border p-3"
          rows="5"
          cols="33"
          placeholder={text[3][3]}
          required
        />
        <input
          className="
            inline-flex
            bg-primary
            text-background
            font-montserrat
            font-semibold
            text-md
            py-4 px-8
            rounded-full
          "
          type="Submit"
          value={text[4]} />
      </form>

      <section className="
      text-primary py-10 text-xs md:text-base
      text-center
      grid grid-cols-1 md:grid-cols-3
      divide-y md:divide-y-0 md:divide-x
      divide-primary/20
      ">
        <div className="flex flex-col items-center gap-2 py-4">
          <CiMail className="text-6xl" />
          <p className="font-bold">{text[5][0].title}</p>
          <p className="font-medium">{text[5][0].text}</p>
        </div>
        <div className="flex flex-col items-center gap-2 py-4">
          <FaInstagram className="text-6xl" />
          <p className="font-bold">{text[5][1].title}</p>
          <p className="font-medium">{text[5][1].text}</p>
        </div>
        <div className="flex flex-col items-center gap-2 py-4">
          <IoLocationOutline className="text-6xl" />
          <p className="font-bold">{text[5][2].title}</p>
          <p className="font-medium">{text[5][2].text}</p>
        </div>
      </section>

    </section>

    <img className="
    w-1/2
    bg-no-repeat
    lg:bg-cover
    bg-center
    [mask-image:linear-gradient(to_right,transparent_0%,black_2%)]
    hidden
    lg:flex
    " src="/images/Flower2.png"
      alt="Flower" />
  </article>;
}
