import * as yup from "yup";

export const bookingValidation = yup.object().shape({
  name: yup.string().required("Please enter your full name"),
  email: yup
    .string("Invalid email address")
    .email()
    .required(" please enter a valid email"),
  home: yup.string().required("Please enter your home address"),
  phone: yup.string().required("Please enter your phone number"),
  event: yup.string().required("Please enter your event type"),
  venue: yup.string().required("Please enter your event venue"),
  time: yup.string().required("Please enter your event time"),
  date: yup.string().required("Please enter your event date"),
  guest: yup.string().required("Please enter expected number of guest"),
  describe: yup.string().required("Please describe your event"),
});
