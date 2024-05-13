type Props = {
  title: string;
  detail: string;
  src: string;
};

const CardService = ({ title, detail, src }: Props) => {
  return (
    <div className="card h-80 max-w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={src} alt={title} className="w-20 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default CardService;
