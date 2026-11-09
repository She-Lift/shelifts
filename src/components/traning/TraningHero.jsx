export default function TraningHero() {
  return <section className="flex justify-between p-10 sm:p-0 sm:pl-10">
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
  </section >;
}
