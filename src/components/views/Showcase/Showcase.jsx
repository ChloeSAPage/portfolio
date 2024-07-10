import styles from "./Showcase.module.css";
import projectData from "../../../assets/project-data.json";
import ProjectCard from "../ProjectCard/ProjectCard";

function Showcase() {
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
            <h2 className={styles.title}>
                P<span className={styles.underline}>roject</span>s
            </h2>
            {projects}
        </div>
    );
}

export default Showcase;
