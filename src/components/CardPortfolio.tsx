const CardPortfolio = () => {
  return (
    <figure className="borderrad group h-64 w-64 cursor-pointer">
      <div className="relative h-full overflow-hidden">
        <img
          className="w-full object-cover"
          src="https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-4 bg-blueZodiac/80 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <h1 className="text-center text-xl font-bold text-tiara">
            Dashboard
          </h1>
          <hr className="w-1/2" />
          <p className="text-center text-sm text-tiara">
            Make Dashboard in power Bi
          </p>
        </div>
      </div>
    </figure>
  );
};

export default CardPortfolio;
