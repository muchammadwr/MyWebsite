const CardPortfolio = () => {
  return (
    <figure className="group h-fit w-72">
      <div className="relative overflow-hidden">
        <img
          className="h-96 w-full object-cover"
          src="https://images.unsplash.com/photo-1659576294143-1da218a2d82e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt=""
        />
        <div className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-black/20 opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <button className="bg-black px-5 py-2 text-white">Add to cart</button>
        </div>
      </div>
      <h2 className="mt-3 text-xl capitalize">Straw Hat</h2>
      <del className="text-lg text-red-700">$49</del>
      <p className="ml-1 mt-2 inline-block text-xl">$35</p>
    </figure>
  );
};

export default CardPortfolio;
