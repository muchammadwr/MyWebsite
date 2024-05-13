type Props = {
  title: string;
  detail: string;
  src: string;
};

const CardPortfolio = ({ title, detail, src }: Props) => {
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <img
          src={src}
          alt={title}
          className="h-56 bg-cover bg-center object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{detail}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">See More!</button>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
