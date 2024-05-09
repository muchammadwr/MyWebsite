const Bg = ({
  title,
  background,
  id,
  height,
}: {
  title: string;
  background: string;
  id: string;
  height: string;
}) => {
  return (
    <section
      className={`relative flex ${height} w-full flex-col items-center justify-center bg-black ${background} bg-cover bg-fixed bg-center bg-no-repeat p-4`}
      id={id}
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
