const ContactMe = ({ id }: { id?: string }) => {
  return (
    <section className="w-full p-4 md:p-8 lg:py-24" id={id}>
      <div className="m-auto lg:max-w-5xl">
        <span className="border-blueZodiac text-blueZodiac border-b-2 text-xl font-bold md:text-2xl lg:text-3xl">
          Contact Me
        </span>
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <form
            action=""
            method="post"
            className="flex w-1/2 flex-col items-center justify-center gap-4"
          >
            <input
              className="border-blueZodiac text-blueZodiac placeholder:text-tiara focus:ring-blueZodiac h-10 w-full border-2 p-4 text-sm focus:border-none focus:ring-4"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              className="border-blueZodiac text-blueZodiac placeholder:text-tiara focus:ring-blueZodiac h-10 w-full border-2 p-4 text-sm focus:border-none focus:ring-4"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <textarea
              className="border-blueZodiac text-blueZodiac placeholder:text-tiara focus:ring-blueZodiac w-full border-2 p-4 text-sm focus:border-none focus:ring-4"
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
