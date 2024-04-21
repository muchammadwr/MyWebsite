type Props = {
  title: string;
  detail: string;
  src: string;
  href: string;
};

const Card = ({ title, detail, src, href }: Props) => {
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
          <a
            href={href}
            className="text-sm font-semibold text-blueZodiac md:text-base"
          >
            Example
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
