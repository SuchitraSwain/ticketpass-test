import React from "react";
import Navbar from "../layout/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { eventsList } from "./EventList";
import { useNavigate } from "react-router-dom";

const EventSchema = Yup.object().shape({
  name: Yup.string().required("Event name is required"),
  description: Yup.string().required("Description is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date()
    .min(Yup.ref("startDate"), "End date can't be before Start date")
    .required("End date is required"),
  image: Yup.string().required("Image is required"),
});

const CreateEvent = () => {
  let navigate = useNavigate();
  return (
    <section className="createEvent__section">
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Formik
              initialValues={{
                name: "",
                startDate: "",
                endDate: "",
                description: "",
                image: "",
              }}
              validationSchema={EventSchema}
              onSubmit={(values, { setSubmitting }) => {
               const updateEvent = [...eventsList, values];
               console.log(updateEvent);
               navigate("/", { state: values });
                alert("Form is validated! Submitting the form...");
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label className="fw-bold">Event name</label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Event name"
                          className={`form-control ${
                            touched.name && errors.name ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="name"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-4">
                      <div className="form-group">
                        <label className="fw-bold">Start Date</label>
                        <Field
                          type="date"
                          name="startDate"
                          placeholder="Start Date"
                          className={`form-control ${
                            touched.startDate && errors.startDate
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="startDate"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="col-6 mt-4">
                      <div className="form-group">
                        <label className="fw-bold">End Date</label>
                        <Field
                          type="date"
                          name="endDate"
                          placeholder="End Date"
                          className={`form-control ${
                            touched.endDate && errors.endDate
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="endDate"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-group">
                        <label className="fw-bold">Event description</label>
                        <Field
                          component="textarea"
                          rows="4"
                          type="text"
                          name="description"
                          placeholder="Event description"
                          className={`form-control ${
                            touched.description && errors.description
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="description"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mt-4">
                      <div className="form-group">
                        <label className="fw-bold">Event Image</label>
                        <Field
                          type="file"
                          name="image"
                          accept="image/*"
                          placeholder="Event Image"
                          className={`form-control ${
                            touched.image && errors.image ? "is-invalid" : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="image"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn fill__btn w-50 mt-5 d-block mx-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "SUBMIT"}
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

export default CreateEvent;
