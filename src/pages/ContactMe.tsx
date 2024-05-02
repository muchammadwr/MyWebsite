const ContactMe = () => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24">
      <div className="m-auto lg:max-w-5xl">
        <span className="border-b-2 border-blueZodiac text-xl font-bold text-blueZodiac md:text-2xl lg:text-3xl">
          Contact Me
        </span>
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <form
            action=""
            method="post"
            className="flex w-1/2 flex-col items-center justify-center gap-4"
          >
            <input
              className="h-10 w-full border-2 border-blueZodiac p-4 text-sm text-blueZodiac placeholder:text-tiara focus:border-none focus:ring-4 focus:ring-blueZodiac"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              className="h-10 w-full border-2 border-blueZodiac p-4 text-sm text-blueZodiac placeholder:text-tiara focus:border-none focus:ring-4 focus:ring-blueZodiac"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full border-2 border-blueZodiac p-4 text-sm text-blueZodiac placeholder:text-tiara focus:border-none focus:ring-4 focus:ring-blueZodiac"
              name="message"
              id=""
              cols={10}
              rows={3}
              placeholder="Message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default ContactMe;
