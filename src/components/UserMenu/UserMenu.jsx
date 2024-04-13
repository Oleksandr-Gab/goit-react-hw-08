import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserName.module.css";
export default function UserMenu() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(logOut())     
    }
    return (
        <div className={css.container}>
            <h3>Welcome, {user.name}</h3>
            <div className={css.button} type="button" onClick={handleSubmit}> Log out </div>
        </div>
    )
}