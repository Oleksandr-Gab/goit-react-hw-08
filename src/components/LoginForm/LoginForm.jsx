import { Form, Field, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
export default function LoginForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values, action) => {
        dispatch(logIn(values));
        action.resetForm();
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required!"),
        password: Yup.string()
            .min(7, "Too Short password!")
            .required("Password is required!"),
    });

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form className={css.form}>
                <label className={css.label}>
                    Email
                    <Field
                        className={css.field}
                        type="text"
                        name="email"
                        placeholder="Your e-mail"
                        aria-label="Input for your email"
                        required
                    />
                    <ErrorMessage name="email" component="span" />
                </label>
                <label className={css.label}>
                    Password
                    <Field
                        className={css.field}
                        type="password"
                        name="password"
                        placeholder="Your password"
                        aria-label="Input for your password"
                        required
                    />
                    <ErrorMessage name="password" component="span" />
                </label>
                <button type="submit">Log in</button>
            </Form>
        </Formik>
    );
}
