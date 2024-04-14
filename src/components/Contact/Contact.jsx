import css from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
export default function Contact({ contact: { name, number, id } }) {
    const dispatch = useDispatch();
    const handleContactDelete = () => dispatch(deleteContact(id, name));
    return (
        <div className={css.container}>
            <div className={css.box}>
                <div className={css.wrapper}>
                    <IoPerson className={css.person} />
                    <p className={css.p}>{name}</p>
                </div>
                <div className={css.wrapper}>
                    <FaPhone className={css.phone} />
                    <p className={css.p}>{number}</p>
                </div>
            </div>
            <button className={css.button} onClick={handleContactDelete}>
                delete
            </button>
        </div>
    );
}
