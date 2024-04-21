import CardPortfolio from "../components/CardPortfolio";

const Portfolio = () => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24">
      <div className="m-auto lg:max-w-5xl">
        <span className="border-b-2 border-blueZodiac text-xl font-bold text-blueZodiac md:text-2xl lg:text-3xl">
          Portfolio
        </span>
        <CardPortfolio />
      </div>
    </section>
  );
};

export default Portfolio;
