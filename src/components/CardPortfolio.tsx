type Props = {
  title: string;
  detail: string;
  img: string;
};
const CardPortfolio = ({ title, detail, img }: Props) => {
  return (
    <figure className="group aspect-[4/3] cursor-pointer">
      <div className="relative h-full overflow-hidden">
        <img className="w-full object-cover" src={img} alt="" />
        <figcaption className="absolute flex h-full w-full flex-col items-center justify-center gap-4 bg-blueZodiac/80 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <h1 className="text-center text-xl font-bold text-tiara">{title}</h1>
          <hr className="w-1/2" />
          <p className="text-center text-sm text-tiara">{detail}</p>
        </figcaption>
      </div>
    </figure>
  );
};

export default CardPortfolio;
