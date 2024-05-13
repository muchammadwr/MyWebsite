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
              className="input input-bordered w-full max-w-sm"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              className="input input-bordered w-full max-w-sm"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full max-w-sm"
              name="message"
              id=""
              cols={10}
              rows={3}
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn btn-neutral w-full max-w-sm">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
