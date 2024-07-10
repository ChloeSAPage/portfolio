import projectData from "../../../assets/project-data.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Home.module.css";

function Home() {
    const projects = projectData.map((item, index) => {
        return (
            <ProjectCard
                index={index}
                key={item.projectName}
                name={item.projectName}
                description={item.description}
                githubLink={item.githubLink}
                link={item.link}
                image={item.image}
                languages={item.languages}
                libraries={item.libraries}
            />
        );
    });

    return (
        <div className={styles.wrapper}>
            <h4 className={styles.tagline}>Junior Web Developer</h4>
            <h1 className={styles.heading}>Hiya! My name is Chloe Page.</h1>

            <h2 className={styles.title}>
                A<span className={styles.underline}>bout M</span>e
            </h2>
            <p>
                I'm a Junior Developer, with a background in microbiology. I
                like making things.
            </p>
            <p>
                I like playing video games (I've played League of Legends since
                2014!) and watching E-sports
            </p>
            <p>I love nature and I started birdwatching early 2024</p>
            <p>I enjoy hiking</p>
            <p>I like biology, specifically microbiology.</p>
            <p>I love learning new things!</p>
            <p>I like coding and problem solving</p>

            <h2 className={styles.title}>
                C<span className={styles.underline}>ontact M</span>e
            </h2>
            <p>Get in touch!</p>
            <p>
                <MdEmail /> chloesapagepersonal@gmail.com
            </p>

            <h2 className={styles.title}>
                P<span className={styles.underline}>roject</span>s
            </h2>
            {projects}
        </div>
    );
}

export default Home;
