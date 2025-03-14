import * as yup from "yup";

export const messageValidation = yup.object().shape({
  name: yup.string().required("Please enter your full name"),
  email: yup
    .string("Invalid email address")
    .email()
    .required(" please enter a valid email"),
  message: yup.string().required("Please write a message or comment"),
  question: yup.string().required("Please ask your question"),
});
