import projectData from "../../../assets/project-data.json";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { MdEmail } from "react-icons/md";
import styles from "./Home.module.css";
import { useState } from "react";
import AboutMe from "../../AboutMe/AboutMe";

function Home() {
    const [isClicked, setIsClicked] = useState(false)

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

    const showAboutMe = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Hiya! My name is Chloe Page.</h1>

            <h2 className={styles.title}>
                A<span className={styles.underline}>bout M</span>e
            </h2>
            <p>
                I'm a Junior Developer, with a background in microbiology. I
                like making things.
            </p>
            <p>
                I completed TechNative Academy's 16-week full-stack bootcamp and
                CodeFirstGirls Degree: Software Engineering concurrently.
            </p>

            <button onClick={() => showAboutMe()} className={styles.button}>
                <h3>
                    R<span className={styles.underline}>ead More About M</span>e
                </h3>
            </button>

            {isClicked ? <AboutMe /> : ""}

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
