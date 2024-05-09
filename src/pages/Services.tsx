import Card from "../components/CardService";
import { motion } from "framer-motion";

const ServicesMenu = [
  {
    title: "Data Analysis",
    detail:
      "Experience data-driven excellence with our tailored solutions for analysts.",
    src: "/src/assets/chart.svg",
  },
  {
    title: "Machine Learning",
    detail:
      "I develop machine learning models using Python to conduct predictive analysis on the data.",
    src: "/src/assets/brain.svg",
  },
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

const container = (delay: number, x: number) => ({
  hidden: { x: x, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.8, delay: delay },
  },
});

const Services = () => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24">
      <div className="m-auto lg:max-w-5xl">
        <motion.span
          variants={container(2, -100)}
          initial="hidden"
          animate="visible"
          className="border-b-[1px] text-xl font-bold md:text-2xl lg:text-3xl"
        >
          I will do ...
        </motion.span>
        <div className="gap mt-10 grid grid-cols-1 place-items-center gap-6 p-4 md:grid-cols-2 ">
          {ServicesMenu.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              detail={item.detail}
              src={item.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
