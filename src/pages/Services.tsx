import Card from "../components/Card";

const ServicesMenu = [
  {
    title: "Data Analysis",
    detail:
      "I'm using tools like a Microsoft Excel, Microsoft Power BI, SQL Language for analyse the data, make output insights for company start from data cleaning, preprocessing, exploratory data analysis and insight, report and visual graph",
    src: "/src/assets/chart.svg",
    href: "#",
  },
  {
    title: "Machine Learning",
    detail:
      "I make models machine learning from the data to make a predictive analysis I'm using python with algorithm supervised, unsupervised",
    src: "/src/assets/brain.svg",
    href: "#",
  },
  {
    title: "Frontend",
    detail:
      "I make user interface website with JavaScript, TypeScript programming language and Library ReactJs and TailwindCSS",
    src: "/src/assets/client.svg",
    href: "#",
  },
  {
    title: "Backend",
    detail: "I make Restful API using NodeJS and ExpressJS in the server side",
    src: "/src/assets/server.svg",
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24">
      <div className="m-auto lg:max-w-5xl">
        <span className="border-b-2 border-blueZodiac text-xl font-bold text-blueZodiac md:text-2xl lg:text-3xl">
          Services
        </span>
        <div className="mt-10 flex flex-col gap-8">
          {ServicesMenu.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              detail={item.detail}
              src={item.src}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
