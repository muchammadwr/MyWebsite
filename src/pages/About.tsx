const About = () => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24">
      <div className="m-auto lg:max-w-5xl">
        <span className="border-b-2 border-blueZodiac text-xl font-bold text-blueZodiac md:text-2xl lg:text-3xl">
          About Me
        </span>
        <div className="mt-10 flex flex-col items-center justify-center gap-9 md:flex md:flex-row lg:flex lg:flex-row">
          <img src="/public/photo.jpg" alt="" className="w-52" />
          <div>
            <h2 className="text-sm md:text-base">
              Hi, I'm Muchammad Wildan 🖐️
            </h2>
            <br />
            <p className="text-sm md:text-base">
              A Data Scientist and Software Engineer. My job involves
              processing, analyzing, and building models using machine learning
              with data to achieve better decision-making based on data. In
              addition to data science, I also possess the ability to develop
              website applications.
            </p>
            <br />
            <p className="text-sm md:text-base">
              Currently, I am studying at Muhammadiyah Cyber University,
              majoring in Information Engineering, and at the Open University,
              majoring in Management, using fully online learning methods. This
              allows me to continue my studies and work simultaneously,
              requiring very strict time management.
            </p>
            <br />
            <p className="text-sm md:text-base">
              In my free time, I prefer to use it to explore nature and engage
              in sports to avoid experiencing burnout and stress. I also enjoy
              reading books, especially those on self-improvement.
            </p>
            <br />
            <button className="border-2 border-blueZodiac px-6 py-3 text-sm hover:bg-blueZodiac hover:text-tiara md:text-base">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
