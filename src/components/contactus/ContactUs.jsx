import React from "react";
import ContactHero from "./contacthero/ContactHero";
import ContactAddress from "./contactaddress/ContactAddress";
import ContactLocation from "./contactlocation/ContactLocation";

const ContactUs = () => {
  return (
    <React.Fragment>
      <ContactHero />
      <ContactAddress />
      <ContactLocation />
    </React.Fragment>
  );
};

export default ContactUs;
