import "./Login.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

const Login = () => {
  return (
    <section className="login__section">
      <div className="container">
        <div className="row flex-column align-items-center justify-content-center">
          <div className="col-md-6">
            <img
              src={require("../../assets/img/logo.png")}
              alt="ticketpass"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 mt-5">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values, { setSubmitting }) => {
                alert("Form is validated! Submitting the form...");
                console.log(values);
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Address"
                      className={`form-control ${
                        touched.email && errors.email ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group mt-3">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn w-50 mt-4 d-block mx-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "LOG IN"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
