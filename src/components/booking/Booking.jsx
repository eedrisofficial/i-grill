import { useFormik } from "formik";
import React, { useState } from "react";
import { bookingValidation } from "../../validation/BookingValidation";
import { allFood } from "../../localdatabase/food";
import BookingMeal from "./BookingMeal";
import NextBtn from "./NextBtn";

const Booking = () => {
  const [meals, setMeal] = useState(allFood);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  const choice = (category) => {
    setMeal(
      allFood.filter((food) => {
        return food.category === category;
      })
    );
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      home: "",
      phone: "",
      event: "",
      venue: "",
      describe: "",
      guest: "",
      place: "",
      time: "",
      date: "",
    },

    validationSchema: bookingValidation,

    onSubmit: () => {},
  });
  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0] w-[100%]">
        {isSubmitted ? (
          <div className="text-center min-h-[60vh] flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold mb-4">Thank you!</h2>
            <h3 className="text-[#DA251C] font-bold mb-4">
              We appreciate you reaching out for our service.
            </h3>
            <p className="text-lg font-semibold mb-4">
              We will get back to you shortly
            </p>
          </div>
        ) : (
          <section className=" flex flex-col justify-center  gap-16 py-16 px-4 lg:flex-row max-w-6xl mx-auto">
            <form action="" className="w-[80%] lg:w-[50%]">
              <div className="flex flex-col mb-6">
                <h1 className="text-[1.5rem] text-[#E53633] opacity-80">
                  Personal Information{" "}
                </h1>
                <p>Kindly fill the form below</p>
              </div>
              <section className="flex flex-col gap-6">
                <div className="flex flex-col gap-10 lg:flex-row ">
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="name" className="text-[0.95rem]">
                      {" "}
                      Enter your full name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name*"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      name="name"
                      required
                      className="w-[100%] bg-[#F0F0F0] focus:bg-white py-3 p-1  rounded-md text-[0.8rem] border  border-[#DCB1B0] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem] outline-none duration-500 caret-[#E53633]"
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email" className=" text-[0.95rem]">
                      {" "}
                      Enter your email address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      name="email"
                      required
                      className="w-[100%] bg-[#F0F0F0] focus:bg-white py-3 p-1 border rounded-md text-[0.8rem]  border-[#DCB1B0] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem]  outline-none duration-500 caret-[#E53633]"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col gap-10 lg:flex-row">
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="email" className=" text-[0.95rem]">
                      {" "}
                      Enter your phone number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      name="phone"
                      required
                      className="w-[100%] bg-[#F0F0F0] focus:bg-white py-3 p-1 border rounded-md text-[0.8rem]  border-[#DCB1B0] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem]  outline-none duration-500 caret-[#E53633]"
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.phone}
                      </div>
                    ) : null}
                  </div>
                </div>
              </section>
              <h1 className="text-[1.3rem] text-[#E53633] opacity-80 mt-10">
                Event Information
              </h1>
              <section className="w-[100%] flex flex-col gap-10 mt-4 lg:flex-row">
                <section className="lg:w-[50%] flex flex-col gap-6">
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="event" className="text-[0.95rem]">
                      {" "}
                      What&apos;s your event type?
                    </label>
                    <input
                      type="text"
                      placeholder="Event type"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.event}
                      name="event"
                      required
                      className="w-[100%] bg-[#F0F0F0] focus:bg-white py-3 p-1  rounded-md text-[0.8rem] border  border-[#DCB1B0] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem] outline-none duration-500 caret-[#E53633]"
                    />
                    {formik.touched.event && formik.errors.event ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.event}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="venue" className=" text-[0.95rem]">
                      {" "}
                      Where’s your event venue?
                    </label>
                    <input
                      type="text"
                      placeholder="Enter event venue"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.venue}
                      name="venue"
                      required
                      className="w-[100%] bg-[#F0F0F0] focus:bg-white py-3 p-1 border rounded-md text-[0.8rem]  border-[#DCB1B0] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem]  outline-none duration-500 caret-[#E53633]"
                    />
                    {formik.touched.venue && formik.errors.venue ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.venue}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="describe" className="text-[0.95rem]">
                      {" "}
                      Describe your Event
                    </label>
                    <textarea
                      cols="10"
                      rows="5"
                      placeholder="Describe your event"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.describe}
                      name="describe"
                      required
                      className="w-[100%] py-2 p-1 bg-[#F0F0F0] focus:bg-white rounded-md text-[0.8rem] border border-[#DCB1B0] focus:border-[#E53633]  placeholder:text-[#333333] placeholder:text-[0.75rem]  placeholder:opacity-60  resize-none  outline-none duration-500 caret-[#E53633]"
                    ></textarea>
                    {formik.touched.describe && formik.errors.describe ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.describe}
                      </div>
                    ) : null}
                  </div>
                </section>
                <section className="lg:w-[50%] flex flex-col gap-6">
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="guest" className="text-[0.95rem]">
                      What&apos;s your guest no.?
                    </label>
                    <input
                      type="text"
                      placeholder="Guest number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.guest}
                      name="guest"
                      required
                      className="w-[100%] bg-[#F0F0F0] focus:bg-white py-3 p-1  rounded-md text-[0.8rem] border  border-[#DCB1B0] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem] outline-none duration-500 caret-[#E53633]"
                    />
                    {formik.touched.guest && formik.errors.guest ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.guest}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="time" className="text-[0.95rem]">
                      {" "}
                      Enter Event Time
                    </label>
                    <input
                      type="text"
                      placeholder="Event time for event"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.time}
                      name="time"
                      required
                      className="w-[100%] bg-[#F0F0F0] focus:bg-white py-3 p-1  rounded-md text-[0.8rem] border  border-[#DCB1B0] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem] outline-none duration-500 caret-[#E53633]"
                    />
                    {formik.touched.time && formik.errors.time ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.time}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label htmlFor="date" className=" text-[0.95rem]">
                      {" "}
                      Enter Event Date
                    </label>
                    <input
                      type="text"
                      placeholder="Enter event date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.date}
                      name="date"
                      required
                      className="w-[100%] bg-[#F0F0F0] focus:bg-white py-3 p-1 border rounded-md text-[0.8rem]  border-[#DCB1B0] focus:border-[#E53633] placeholder:opacity-60  placeholder:text-[#333333] placeholder:text-[0.75rem]  outline-none duration-500 caret-[#E53633]"
                    />
                    {formik.touched.date && formik.errors.date ? (
                      <div className="text-red-400 text-[0.75rem] font-mono">
                        {formik.errors.date}
                      </div>
                    ) : null}
                  </div>
                </section>
              </section>
              <button
                type="submit"
                onClick={handleSubmit}
                className="mt-16 w-[50%] rounded-md font-medium bg-[#E53633] text-[#FFF]  py-2 px-2 hover:opacity-80 duration-300 lg:w-[40%]"
              >
                Proceed to book
              </button>
            </form>
            <div className="flex flex-col gap-6 lg:w-[50%]">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-2 pt-5  mx-auto w-full">
                {meals.map((foodCategory) => (
                  <BookingMeal foodCategory={foodCategory} />
                ))}
              </div>
              <NextBtn choice={choice} />
            </div>
          </section>
        )}
      </div>
    </React.Fragment>
  );
};

export default Booking;
