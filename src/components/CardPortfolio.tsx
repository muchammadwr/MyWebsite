import { motion } from "framer-motion";

type Props = {
  title: string;
  detail: string;
  img: string;
};

const container = (delay: number, y: number) => ({
  hidden: { y: y, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.8, delay: delay },
  },
});

const CardPortfolio = ({ title, detail, img }: Props) => {
  return (
    <motion.figure
      variants={container(0.8, 100)}
      initial="hidden"
      animate="visible"
      className="group aspect-[4/3] cursor-pointer"
    >
      <div className="relative h-full overflow-hidden">
        <img className="w-full object-cover" src={img} alt="" />
        <figcaption className="absolute flex h-full w-full flex-col items-center justify-center gap-4 bg-neutral-800/80 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <h1 className="text-center text-xl font-bold text-neutral-200">
            {title}
          </h1>
          <hr className="w-1/2" />
          <p className="text-center text-sm text-neutral-200">{detail}</p>
        </figcaption>
      </div>
    </motion.figure>
  );
};

export default CardPortfolio;
