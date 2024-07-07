import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as yup from "yup";

const initialValues = {
  name: "",
  number: "",
};

const ContactFormSchema = yup.object().shap({
  name: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="name" />
        <ErrorMessage name="name" component="span" />
        <Field className={css.input} type="text" name="number" />
        <ErrorMessage name="number" component="span" />
        <button className={css.button} type="Submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
