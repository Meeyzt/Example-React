import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Email Required"),
  password: yup
    .string()
    .min(5, "Password must be 5 characters")
    .required("Password Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "passwords do not match")
    .required("Confirm Password Required"),
});

export default validations;
