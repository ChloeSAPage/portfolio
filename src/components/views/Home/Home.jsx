import { useNavigate } from "react-router-dom";
import YellowButton from "../../Reusable/YellowButton/YellowButton";
import WhiteButton from "../../Reusable/WhiteButton/WhiteButton";
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
            <h1 className={styles.heading}>Hiya! My name is Chloe Page.</h1>
            <p>
                I'm a Junior Developer, with a background in microbiology. I
                like making things.
            </p>
            <div className={styles.buttonContainer}>
                <YellowButton onClick={() => goToProjects()} text="Showcase" />
                <WhiteButton onClick={() => goToLinkedIn()} text="LinkedIn" />
                <YellowButton onClick={() => goToGitHub()} text="GitHub" />
            </div>

            <h2 className={styles.aboutme}>
                A<span className={styles.underline}>bout M</span>e
            </h2>
            <p>
                I like playing video games (I've played League of Legends since
                2014!) and watching Esports
            </p>
            <p>I love nature and I started birdwatching early 2024</p>
            <p>I enjoy hiking</p>
            <p>I like biology, specifically microbiology.</p>
            <p>I love learning new things!</p>
            <p>I like coding and problem solving</p>
        </div>
    );
}

export default Home;
