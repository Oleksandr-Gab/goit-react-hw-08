
import css from "./ContactForm.module.css"
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { addContact } from "../../redux/contacts/operations";
 import { toast } from 'react-toastify';

const initialValues = {
    name: "",
    number: ""
}
export default function ContactForm() {
    const nameField = useId();
    const numberField = useId();
    const dispatch = useDispatch();
    const selectContact = useSelector(selectContacts);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Too Short name")
            .max(50, "Too Long name!")
            .required("Name is required!"),
        number: Yup.string()
            .min(3, "Too Short number!")
            .max(50, "Too Long number!")
            .required("Number is required!"),
    });

    const handleSubmit = (values, actions) => { 
        if (selectContact.find((contact) =>  contact.number === values.number)) {
            actions.resetForm()
            return toast(`This number ${values.number} is already exist`)
            
            
        }
      dispatch(addContact(values));
       actions.resetForm()
        
       
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
    <Form className={css.container}>
                 <label htmlFor={nameField} className={css.label}>Name</label>
                <Field type="text" name="name" id={nameField} className={css.input} required/>
                <ErrorMessage name="name" component={"span"} />
                <label htmlFor={numberField} className={css.label}>Number</label>
                <Field type="text" name="number" placeholder="xxx-xxx-xxxx" id={numberField} className={css.input} required />
                <ErrorMessage name="number" component={"span"} />
                         <button className={css.button} type="submit">Add contact</button>
    </Form>       
  </Formik>
    )
}