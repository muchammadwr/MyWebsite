type Props = {
  title: string;
  detail: string;
  src: string;
};

const CardService = ({ title, detail, src }: Props) => {
  return (
    <div className="flex flex-row gap-8">
      <img src={src} alt="" className="w-16 md:w-20 lg:w-24" />
      <div>
        <h1 className="md:text-md text-base font-semibold lg:text-lg">
          {title}
        </h1>
        <p className="text-sm md:text-base">
          {detail}
          <br />
        </p>
      </div>
    </div>
  );
};

export default CardService;
