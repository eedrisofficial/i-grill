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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.017013621445!2d0.1282547764774372!3d51.494555271810384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8af4817a91ae5%3A0x20435413d5f33611!2sWalegrills!5e0!3m2!1sen!2sng!4v1708058696748!5m2!1sen!2sng"
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
