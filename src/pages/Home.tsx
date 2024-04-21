const Home = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center bg-black bg-[url('/public/bghero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat p-4">
      <div className="absolute h-full w-full bg-blueZodiac bg-opacity-85"></div>
      <div className="flex flex-col gap-4">
        <h2 className="z-10 text-4xl font-bold text-tiara md:text-5xl lg:text-6xl">
          MUCHAMMAD WILDAN ALKAUTSAR
        </h2>
        <p className="z-10 text-base text-tiara md:text-lg">
          Data Scientist & Software Engineer
        </p>
      </div>
    </section>
  );
};

export default Home;
