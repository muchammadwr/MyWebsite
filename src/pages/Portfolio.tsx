import { useState } from "react";
import CardPortfolio from "../components/CardPortfolio";



const Projects = [
  {
    title: "Dashboard",
    detail: "Make Data Analysis in Power Bi",
    category: "Data Analysis",
    img: "/public/analyst.jpg",
  },
  {
    title: "Regresi",
    detail: "Make Model Linear Regression",
    category: "Machine Learning",
    img: "/public/machine.jpg",
  },
  {
    title: "UI",
    detail: "Develop Ui",
    category: "Web Development",
    img: "/public/frontend.jpg",
  },
  {
    title: "Restful API ",
    detail: "Make a restful API",
    category: "Web Development",
    img: "/public/backend.jpg",
  },
];

const Portfolio = ({ id }: { id?: string }) => {
  const [filter, setFilter] = useState(Projects);

  const filterItems = (category: string) => {
    const newItem = Projects.filter((item) => item.category === category);
    return setFilter(newItem);
  };

  return (
    <section className="w-full p-4 md:p-8 lg:py-24" id={id}>
      <div className="m-auto lg:max-w-5xl">
        <span className="border-blueZodiac text-blueZodiac border-b-[1px] px-4 py-2 text-xl font-bold md:text-2xl lg:text-3xl">
          MyProjects
        </span>
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <div className="flex gap-1">
            <button
              className="rounded-lg border-2 border-neutral-800 px-6 py-3 text-sm transition duration-150 ease-out hover:bg-slate-800 hover:text-neutral-200 hover:ease-in focus:bg-slate-800 focus:text-neutral-200 md:text-base"
              onClick={() => setFilter(Projects)}
            >
              All
            </button>
            <button
              className="rounded-lg border-2 border-neutral-800 px-6 py-3 text-sm transition duration-150 ease-out hover:bg-slate-800 hover:text-neutral-200 hover:ease-in focus:bg-slate-800 focus:text-neutral-200 md:text-base"
              onClick={() => filterItems("Data Analysis")}
            >
              Data Analysis
            </button>
            <button
              className="rounded-lg border-2 border-neutral-800 px-6 py-3 text-sm transition duration-150 ease-out hover:bg-slate-800 hover:text-neutral-200 hover:ease-in focus:bg-slate-800 focus:text-neutral-200 md:text-base"
              onClick={() => filterItems("Machine Learning")}
            >
              Machine Learning
            </button>
            <button
              className="rounded-lg border-2 border-neutral-800 px-6 py-3 text-sm transition duration-150 ease-out hover:bg-slate-800 hover:text-neutral-200 hover:ease-in focus:bg-slate-800 focus:text-neutral-200 md:text-base"
              onClick={() => filterItems("Web Development")}
            >
              Web Development
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filter.map((item) => (
              <CardPortfolio
                key={item.title}
                detail={item.detail}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
