import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validations";

function SignUp() {
  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values) => alert(JSON.stringify(values)),
      validationSchema,
    });
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="emailArea">
          {errors.email && touched.email ? (
            <div className="error">{errors.email}</div>
          ) : (
            <label>Email</label>
          )}
          <input
            name="email"
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="passArea">
          {errors.password && touched.password ? (
            <div className="error">{errors.password}</div>
          ) : (
            <label>Password</label>
          )}
          <input
            name="password"
            values={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="confirmPassArea">
          {errors.confirmPassword && touched.confirmPassword ? (
            <div className="error">{errors.confirmPassword}</div>
          ) : (
            <label>Confirm Password</label>
          )}
          <input
            name="confirmPassword"
            values={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
        <p
          style={{
            fontWeight: "bold",
            paddingTop: "10px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {JSON.stringify(values)}
        </p>
      </form>
    </div>
  );
}

export default SignUp;
