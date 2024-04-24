import CardPortfolio from "../components/CardPortfolio";

const portfolioProject = [
  {
    title: "Dashboard",
    detail: "Make Dashboard in power Bi",
    category: "Data Analysis",
  },
  {
    title: "Dashboard",
    detail: "Make Dashboard in power Bi",
    category: "Machine Learning",
  },
  {
    title: "Dashboard",
    detail: "Make Dashboard in power Bi",
    category: "Frontend",
  },
  {
    title: "Dashboard",
    detail: "Make Dashboard in power Bi",
    category: "Backend",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24">
      <div className="m-auto lg:max-w-5xl">
        <span className="border-b-2 border-blueZodiac text-xl font-bold text-blueZodiac md:text-2xl lg:text-3xl">
          Portfolio
        </span>
        <div>filter</div>
        <div className="mt-10 grid grid-cols-4">
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
          <CardPortfolio />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
