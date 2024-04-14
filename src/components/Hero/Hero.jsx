import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Hero.module.css";

export default function Hero() {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            {!isLoggedIn ? (
                <>
                    <img
                        className={css.img}
                        src="https://cdn-icons-png.flaticon.com/512/3447/3447682.png"
                        alt="phone book"
                    />
                    <div>
                        {" "}
                        Try it now
                        <Link to="/register"> Register </Link>
                        or
                        <Link to="/login"> Log In </Link>
                    </div>
                </>
            ) : (
                <Link to="/contacts">
                    <img
                        className={css.img}
                        src="https://cdni.iconscout.com/illustration/premium/thumb/writing-letter-7329959-5991640.png?f=webp"
                        alt="phone book"
                    />
                </Link>
            )}
        </>
    );
}
