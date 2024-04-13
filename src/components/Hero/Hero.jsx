import { Link } from "react-router-dom";
import css from "./Hero.module.css"

export default function Hero() {
    return (
        <>
        <img className={css.img} src='https://cdn-icons-png.flaticon.com/512/3447/3447682.png'
        alt="phone book" />
    <div> Turn now 
    <Link to="/register"> Register </Link>
    or
    <Link to="/login"> Log In </Link>
    </div>
        </>
    )
}