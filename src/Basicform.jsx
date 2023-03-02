import { Formik, useFormik } from "formik";
import * as yup from "yup";

const formvalidationSchema = yup.object({
  email: yup.string().required().min(10),
  password: yup.string().required().min(7, "need strong password"),
});

export function Basicform() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => console.log("form data", values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>form validation strat</h1>
      <input
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        type="email"
        placeholder="email"
      ></input>
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="password"
        placeholder="password"
      ></input>

      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : null}
      <button type="submit">submit</button>
    </form>
  );
}
