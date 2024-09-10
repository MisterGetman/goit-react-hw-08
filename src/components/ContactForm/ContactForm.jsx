import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (formData, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: formData.name,
        number: formData.number,
      })
    );
    actions.resetForm();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Should match pattern XXX-XX-XX")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.contactForm}>
        <label>
          <p>Name</p>
          <Field
            className={css.inputField}
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <label>
          <p>Number</p>
          <Field
            className={css.inputField}
            type="tel"
            name="number"
            placeholder="XXX-XX-XX"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={css.errorMessage}
          />
        </label>
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
