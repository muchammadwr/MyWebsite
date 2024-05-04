const Home = ({ id }: { id: string }) => {
  return (
    <section
      className="relative flex h-screen w-full flex-col items-center justify-center bg-black bg-[url('/public/bghero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat p-4"
      id={id}
    >
      <div className="absolute h-full w-full bg-neutral-950 bg-opacity-85"></div>
      <div className="flex flex-col gap-4">
        <h2 className="z-10 text-4xl font-bold text-neutral-200 md:text-5xl lg:text-6xl">
          MUCHAMMAD WILDAN ALKAUTSAR
        </h2>
        <p className="z-10 text-base text-neutral-200 md:text-lg">
          Let's talk about business with data
        </p>
      </div>
    </section>
  );
};

export default Home;
