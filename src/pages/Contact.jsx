import { useContext, useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GlobalContext } from "../GlobalContext.jsx";

export default function Contact() {
  const { textData } = useContext(GlobalContext);
  const [text, setText] = useState(textData.contact);

  return <article className="flex min-h-[70vh] gap-4 justify-center lg:justify-between lg:items-center">
    <section className="min-h-full lg:w-1/2 px-10 sm:pr-0 py-2 sm:py-20 max-w-[1000px]">
      <p className="font-medium text-md pb-2">{text.title}</p>
      <p className="font-baskerville text-5xl sm:text-7xl pb-8"><span className="underline decoration-[4px] underline-offset-[20px]">{text.sub1[0]}</span>{text.sub1[1]}</p>
      <p className="pb-8 text-lg">
        {text.sub2[0]}
        <br />
        {text.sub2[1]}
      </p>

      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input className="border rounded-sm border-form-border p-3 w-1/2"
            type="text"
            placeholder={text.form[0]}
            required
          />
          <input className="border rounded-sm border-form-border p-3 w-1/2"
            type="email"
            placeholder={text.form[1]}
            required
          />
        </div>
        <input className="border rounded-sm border-form-border p-3"
          type="text"
          placeholder={text.form[2]}
          required
        />
        <textarea className="border rounded-sm border-form-border p-3"
          rows="5"
          cols="33"
          placeholder={text.form[3]}
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
          value={text.button} />
      </form>

      <section className="
      text-primary py-10 text-xs md:text-base
      text-center
      grid grid-cols-1 md:grid-cols-3
      divide-y md:divide-y-0 md:divide-x
      divide-primary/20
      ">{text.iconSection.map((item) => <div className="flex flex-col items-center gap-2 py-4">
        {item.icon}
        <p className="font-bold">{item.title}</p>
        <p className="font-medium">{item.text}</p>
      </div>
      )}
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
