import Card from "../components/CardService";

const ServicesMenu = [
  {
    title: "Data Analysis",
    detail:
      "I am proficient in data analysis, capable of deriving insights for a company starting from data cleaning, preprocessing, exploratory data analysis, and generating insights, reports, dashboard and visual graphs.",
    src: "/src/assets/chart.svg",
  },
  {
    title: "Machine Learning",
    detail:
      "I develop machine learning models using Python to conduct predictive analysis on the data. My expertise includes implementing supervised and unsupervised algorithms.",
    src: "/src/assets/brain.svg",
  },
];

const CardService = [
  {
    title: "Frontend",
    detail:
      "I design user interface websites using JavaScript and TypeScript programming languages, along with the ReactJS library and TailwindCSS",
    src: "/src/assets/client.svg",
  },
  {
    title: "Backend",
    detail:
      "Specializing in constructing scalable RESTful APIs to optimize server-side performance and efficiency.",
    src: "/src/assets/server.svg",
  },
];

const Services = () => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24">
      <div className="m-auto lg:max-w-5xl">
        <span className="border-b-[1px] text-xl font-bold md:text-2xl lg:text-3xl">
          I will do ...
        </span>
        <div className="mt-10 grid grid-cols-1  items-center justify-center gap-6 ">
          <div>
            {ServicesMenu.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                detail={item.detail}
                src={item.src}
              />
            ))}
          </div>
          <div>
            {CardService.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                detail={item.detail}
                src={item.src}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
