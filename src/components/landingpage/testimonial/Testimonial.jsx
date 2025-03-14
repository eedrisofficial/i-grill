import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

const testimonials = [
  {
    id: 1,
    text: "Our experience with the food ordering service has been amazing! The convenience and quality of the food is unmatched.",
    name: "Adekunle Bronze",
    position: "CEO, Bronze and Copper Ltd.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707964551140/e2de3733-564d-4036-bb49-dfd0083783a8.png",
  },
  {
    id: 2,
    text: "Our interaction with the food ordering service has been exceptional! The convenience and quality of the food surpass all expectations.",
    name: "Jane Nick",
    position: "CEO, Love and Share Africa.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707965169980/db66586d-1d16-4f60-b455-1488bdf1118a.png",
  },
  {
    id: 3,
    text: "I love how easy it is to place orders. Fast delivery and top-notch service every time!",
    name: "Michael Doe",
    position: "CEO Food Blogger & Africa",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707964551140/e2de3733-564d-4036-bb49-dfd0083783a8.png",
  },
  {
    id: 4,
    text: "Exceptional service! The meals are always fresh and delivered on time. Highly recommend!",
    name: "Amaka Chukwu",
    position: "CEO Abuja Event Planner ",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707965169980/db66586d-1d16-4f60-b455-1488bdf1118a.png",
  },
];

const Testimonial = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <React.Fragment>
      <div className="bg-[#FFFFFF]">
        <section className=" flex flex-col gap-10 py-16 px-4 max-w-6xl mx-auto">
          <div className="font-bold">
            <p className="border-t-4  border-[#E53633] w-fit py-2 text-[1rem]">
              Testify
            </p>
            <h1 className="text-[1.5rem] lg:text-[2rem] ">Customer Reviews</h1>
          </div>
          <section className="flex flex-col justify-center items-center gap-20">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col gap-4 justify-center items-center"
              >
                <div className="flex gap-2">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-[#FFD700]" size={25} />
                  ))}
                </div>
                <p className="font-semibold text-[1.2rem] lg:text-[1.4rem] text-center opacity-70 lg:w-[70%]">
                  {testimonial.text}
                </p>
                <div className="flex gap-4 items-center">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h2 className="font-medium">{testimonial.name}</h2>
                    <p className="font-bold">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}

            <button
              className="flex items-center gap-0"
              onClick={() => setShowAll(!showAll)}
            >
              <p className="bg-[#E53633] text-[#FFF] font-semibold px-5 py-2">
                {showAll ? "View Less" : "View More"}
              </p>
              <span className="bg-[#E53633] text-[#FFF] opacity-80 py-2 px-2 hover:opacity-100 duration-300">
                <MdNavigateNext size={24} />
              </span>
            </button>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Testimonial;
