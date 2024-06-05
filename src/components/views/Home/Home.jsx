import { useNavigate } from "react-router-dom";
import YellowButton from "../../Reusable/YellowButton/YellowButton.jsx";
import WhiteButton from "../../Reusable/WhiteButton/WhiteButton.jsx";

import styles from "./Home.module.css";

function Home() {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate("/showcase");
    };

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/chloesapage/");
    };

    const goToGitHub = () => {
        window.open("https://github.com/ChloeSAPage");
    };

    return (
        <div className={styles.wrapper}>
            <h4 className={styles.tagline}>Junior Web Developer</h4>
            <h1 className={styles.heading}>Hiya! My name is Chloe Page</h1>
            <p>
                I'm a Junior Developer, with a background in microbiology. I
                like making things.
            </p>
            <div className={styles.buttonContainer}>
                <YellowButton onClick={() => goToProjects()} text="Showcase" />
                <WhiteButton onClick={() => goToLinkedIn()} text="LinkedIn" />
                <YellowButton onClick={() => goToGitHub()} text="GitHub" />
            </div>
        </div>
    );
}

export default Home;
