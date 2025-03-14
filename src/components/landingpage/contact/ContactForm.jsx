import React, { useState } from "react";

const ContactForm = () => {
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
      <div className="bg-[#F0F0F0]">
        {isSubmitted ? (
          <div className="min-h-[40vh] flex flex-col justify-center items-center bg-white rounded-md p-8 max-w-6xl mx-auto text-center">
            <h3 className="text-green-600 font-bold mb-4">
              Feedback sent successfully 🎉🎉
            </h3>
            <h2 className="text-xl font-semibold mb-4">
              Thank you for your feedback/comment!
            </h2>
            <h3 className="text-[#DA251C] font-bold mb-4">
              We Will attend to it accordingly
            </h3>
          </div>
        ) : (
          <section className=" flex flex-col gap-10 py-16 px-4  max-w-6xl mx-auto lg:pb-64">
            <div className="font-bold">
              <p className="border-t-4  border-[#E53633] w-fit py-2 text-[1rem]">
                Drop
              </p>
              <h1 className="text-[1.5rem] lg:text-[2rem] ">
                Drop A Feedback/Comment
              </h1>
            </div>
            <section>
              <form
                action=""
                className="w-[90%] md:w-[70%]  lg:w-[40%] flex flex-col justify-center lg:justify-start items-center gap-5 "
              >
                <div className="flex flex-col w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    required
                    className="lg:w-[80%] py-5 p-1  rounded-md text-[0.8rem] border  border-[#4F4F4F] focus:border-[#E53633] placeholder:opacity-60 placeholder:text-[#333333] placeholder:text-[1rem] placeholder:font-semibold  outline-none duration-500 caret-[#E53633]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    required
                    className="lg:w-[80%] py-5 p-1 border rounded-md text-[0.8rem]  border-[#4F4F4F] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[1rem] placeholder:font-semibold  outline-none duration-500 caret-[#E53633]"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <textarea
                    cols="10"
                    rows="5"
                    placeholder="Write your comment here.."
                    value={name}
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                    required
                    className="w-[100%] py-5 p-1  rounded-md text-[0.8rem] border border-[#4F4F4F] focus:border-[#E53633]  placeholder:text-[#333333] placeholder:text-[1rem]  placeholder:opacity-60 placeholder:font-semibold resize-none  outline-none duration-500 caret-[#E53633]"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className=" w-[50%] font-medium bg-[#E53633] text-[#FFF]  py-2 px-2 hover:opacity-80 duration-300 lg:w-[40%]"
                >
                  Submit
                </button>
              </form>
            </section>
          </section>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
