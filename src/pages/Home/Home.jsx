import Hero from "../../components/Hero/Hero";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./Home.module.css";

export default function Home() {
    return (
        <div className={css.hero}>
            <PageTitle>Welcome to phonebook!</PageTitle>
            <Hero />
        </div>
    );
}
