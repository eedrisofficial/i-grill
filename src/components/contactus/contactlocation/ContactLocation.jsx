import React from "react";

const ContactLocation = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0] ">
        <section className="flex flex-col justify-center gap-4 py-16 px-4  max-w-6xl mx-auto ">
          <h1 className="text-[1.5rem] lg:text-[2rem] ">
            <span className="text-[#E53633] ">Locate us</span> on the map
          </h1>
          <section className="rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3125817980776!2d7.488057675827127!3d9.035224088889818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b853e7eac5b%3A0x4db9d6c077113e6d!2sBwari%20Cl%2C%20Garki%2C%20Abuja%20900103%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1741941636435!5m2!1sen!2sng"
              loading="lazy"
              className="rounded-md w-full h-[50vh]"
            ></iframe>
          </section>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ContactLocation;
