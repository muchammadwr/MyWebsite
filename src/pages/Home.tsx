import { motion } from "framer-motion";

const RevealY = (y: number) => ({
  hidden: { opacity: 0, y: y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.8,
      delay: 0.8,
    },
  },
});

const Home = ({ id }: { id: string }) => {
  return (
    <section
      className="relative flex h-screen w-full flex-col items-center justify-center bg-black bg-[url('/public/bghero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat p-4"
      id={id}
    >
      <div className="absolute h-full w-full bg-neutral-950 bg-opacity-85"></div>
      <div className="flex flex-col gap-4">
        <motion.h2
          variants={RevealY(-100)}
          initial="hidden"
          animate="visible"
          className="z-10 text-4xl font-bold text-neutral-200 md:text-5xl lg:text-6xl"
        >
          MUCHAMMAD WILDAN ALKAUTSAR
        </motion.h2>
        <motion.p
          variants={RevealY(100)} //
          initial="hidden"
          animate="visible"
          className="z-10 text-base text-neutral-200 md:text-lg"
        >
          Let's talk about business with data
        </motion.p>
      </div>
    </section>
  );
};

export default Home;
