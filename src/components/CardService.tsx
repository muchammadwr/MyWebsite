type Props = {
  title: string;
  detail: string;
  src: string;
};

const CardService = ({ title, detail, src }: Props) => {
  return (
    <figure className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 p-4">
      <img src={src} alt="" className="w-16 md:w-20 lg:w-24" />
      <figcaption className="flex flex-col justify-center gap-2">
        <h1 className="md:text-md text-base font-semibold lg:text-lg">
          {title}
        </h1>
        <p className="text-sm">
          {detail}
          <br />
        </p>
      </figcaption>
    </figure>
  );
};

export default CardService;
