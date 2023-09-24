function Banner(Props) {
  return (
    <section className="bg-white p-3.5 rounded-xl w-full md:w-max flex flex-col gap-4">
      <h1 className="text-blue-500 text-xm font-bold font-['Space Grotesk'] leading-7 tracking-tight">
        {Props.name}
      </h1>{" "}
      <img src={Props.img} alt="" className="w-full md:max-w-[400px]" />
      <p className="max-w-[400px] text-black text-sm font-normal font-['Space Grotesk'] leading-tight tracking-tight">
        {Props.text}
      </p>
      <a
        href="https://twitter.com/solarxcoin/status/1687163418518700032?s=46&t=2daIS9cmcPy6gCI6VVIn2Q"
        className=" text-blue-500 text-xs font-normal font-['Space Grotesk'] leading-none tracking-tight"
      >
        {Props.link}
      </a>
    </section>
  );
}

export default Banner;

export function getServerSideProps() {
  return { props: {} };
}
