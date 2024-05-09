import { motion } from "framer-motion";

const RevealX = (x: number) => ({
  hidden: { opacity: 0, x: x },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
      delay: 0.8,
    },
  },
});

const About = ({ id }: { id: string }) => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24" id={id}>
      <div className="m-auto lg:max-w-5xl">
        <motion.div variants={RevealX(-100)} initial="hidden" animate="visible">
          <span className="border-blueZodiac text-blueZodiac border-b-[1px] text-xl font-bold md:text-2xl lg:text-3xl">
            Who are you?...
          </span>
        </motion.div>
        <div className="mt-10 flex flex-col items-center justify-center gap-9 md:flex md:flex-row lg:flex lg:flex-row">
          <motion.img
            variants={RevealX(-100)}
            initial="hidden"
            animate="visible"
            src="/public/photo.jpg"
            alt=""
            className="w-52 rounded-lg"
          />
          <motion.div
            variants={RevealX(100)}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-sm md:text-base">
              Hi, I'm Muchammad Wildan 🖐️
            </h2>
            <br />
            <p className="text-sm md:text-base">
              A Data Scientist with background Software Engineer. My job
              involves processing, analyzing, and building models using machine
              learning with data to achieve better decision-making based on
              data. In addition to data science, I also possess the ability to
              develop website applications.
            </p>
            <br />
            <p className="text-sm md:text-base">
              Currently, I am studying at Muhammadiyah Cyber University,
              majoring in Information Engineering, and at the Open University,
              majoring in Management, using fully online learning methods. This
              allows me to continue my studies and work simultaneously,
              requiring very strict time management.
            </p>
            <br />
            <p className="text-sm md:text-base">
              In my free time, I prefer to use it to explore nature and engage
              in sports to avoid experiencing burnout and stress. I also enjoy
              reading books, especially those on self-improvement.
            </p>
            <br />
            <button className="rounded-lg border-2 border-neutral-800 px-6 py-3 text-sm transition duration-150 ease-out hover:bg-slate-800 hover:text-neutral-200 hover:ease-in focus:bg-slate-800 focus:text-neutral-200 md:text-base">
              My Resume
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
