import React from "react";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdSettingsPhone,
} from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactInfo = () => {
  return (
    <React.Fragment>
      <div className="bg-[#F0F0F0]">
        <section className=" flex flex-col justify-center items-center gap-20 py-16 px-4 max-w-6xl mx-auto">
          <div className=" flex flex-col items-center">
            <h1 className="text-[1.5rem] lg:text-[2rem] font-bold">
              Get in Touch
            </h1>
            <p className="text-[1.2rem] text-center">
              Have a question or need assistance? Contact us today.
            </p>
          </div>
          <section className="flex flex-wrap justify-center items-center gap-20 font-semibold text-[1.3rem]">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <MdOutlineEmail size={60} className="text-[#E53633]" />
                <p className="text-[#E53633]">Email</p>
              </div>
              <p className="opacity-80">Hello@igrils.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <MdSettingsPhone size={60} className="text-[#E53633]" />
                <p className="text-[#E53633]">Phone</p>
              </div>
              <p className="opacity-80">+234 7032115588</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center">
                <MdOutlineLocationOn size={60} className="text-[#E53633]" />
                <p className="text-[#E53633]">Office</p>
              </div>
              <p className="opacity-80">123, abc street,Abuja.</p>
            </div>
          </section>
        </section>
        <ContactForm />
      </div>
    </React.Fragment>
  );
};

export default ContactInfo;
