import * as yup from "yup";

export default yup.object().shape({
  username: yup
    .string()
    .required("A Username is required")
    .min(8, "Username must be 8 chars long"),
  email: yup.string().email("Must be an email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  tos: yup.boolean(),
});
