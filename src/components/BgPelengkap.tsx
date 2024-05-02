const Bg = ({ title, background }: { title: string; background: string }) => {
  return (
    <section
      className={`relative flex h-screen w-full flex-col items-center justify-center bg-black ${background} bg-cover bg-fixed bg-center bg-no-repeat p-4`}
    >
      <div className="absolute h-full w-full bg-neutral-950 bg-opacity-85"></div>
      <div className="flex flex-col gap-4">
        <h2 className="z-10 text-4xl font-bold text-neutral-200 md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
    </section>
  );
};

export default Bg;
