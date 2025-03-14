import React, { useState } from "react";

const ContactHero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) {
      return;
    }
    setIsSubmitted(true);
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0] ">
        <section className="w-[100%] flex flex-col  justify-between items-end  gap-16 py-16 px-4 lg:flex-row max-w-6xl mx-auto">
          <section className="lg:w-[50%] flex flex-col px-4 ">
            <div>
              <p className="text-[1rem] ">
                <span className="border-t-4  border-[#E53633] w-fit ">
                  We would{" "}
                </span>{" "}
                love to hear from you
              </p>
              <h1 className="text-[1.5rem] lg:text-[2rem] ">Contact Us</h1>
            </div>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1708054197423/12b62582-b440-484f-a895-c50001480fc9.png"
              alt="chef"
              loading="lazy"
            />
          </section>
          {isSubmitted ? (
            <div className="min-h-[30vh] flex flex-col justify-center items-center bg-white rounded-md p-8 max-w-6xl mx-auto text-center">
              <h3 className="text-green-600 font-bold mb-4">
                Message sent successfully 🎉🎉
              </h3>
              <h2 className="text-xl font-semibold mb-4">
                Thank you for reaching out! !
              </h2>
              <h3 className="text-[#DA251C] font-bold mb-4">
                We Will get back to you soon
              </h3>
            </div>
          ) : (
            <section className="w-full lg:w-[50%] md:px-4">
              <form
                action=""
                className=" w-[100%] md:w-[60%] lg:w-[70%] flex flex-col   gap-5 "
              >
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="name" className="opacity-80 text-[0.85rem]">
                    {" "}
                    Tell us your name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name*"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    required
                    className="w-[100%] py-2 p-1  rounded-md text-[0.8rem] border  border-[#4F4F4F] focus:border-[#E53633] placeholder:opacity-60 placeholder:text-[#333333] placeholder:text-[0.75rem] outline-none duration-500 caret-[#E53633]"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label htmlFor="email" className="opacity-80 text-[0.85rem]">
                    {" "}
                    Enter your email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    required
                    className="w-[100%] py-2 p-1 border rounded-md text-[0.8rem]  border-[#4F4F4F] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem]  outline-none duration-500 caret-[#E53633]"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label
                    htmlFor="message"
                    className="opacity-80 text-[0.85rem]"
                  >
                    {" "}
                    What’s your question or request?*
                  </label>
                  <textarea
                    cols="10"
                    rows="5"
                    placeholder="Question"
                    value={name}
                    onChange={(e) => setMessage(e.target.value)}
                    name="question"
                    required
                    className="w-[100%] py-2 p-1  rounded-md text-[0.8rem] border border-[#4F4F4F] focus:border-[#E53633]  placeholder:text-[#333333] placeholder:text-[0.75rem]  placeholder:opacity-60  resize-none  outline-none duration-500 caret-[#E53633]"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className=" w-[50%]  font-medium bg-[#E53633] text-[#FFF]  py-2 px-2 hover:opacity-80 duration-300 lg:w-[40%]"
                >
                  Send message
                </button>
              </form>
            </section>
          )}
        </section>
      </div>
    </React.Fragment>
  );
};

export default ContactHero;
