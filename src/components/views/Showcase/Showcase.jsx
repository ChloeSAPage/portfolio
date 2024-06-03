import styles from "./Showcase.module.css";
import projectData from "../../../assets/project-data.json";
import ProjectCard from "../ProjectCard/ProjectCard";

function Showcase() {
    const projects = projectData.map((item, index) => {
        return (
            <ProjectCard
                index={index}
                name={item.projectName}
                description={item.description}
                githubLink={item.githubLink}
                image={item.image}
                languages={item.languages}
                libraries={item.libraries}
            />
        );
    });

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.center}>Showcase</h2>
            {projects}
        </div>
    );
}

export default Showcase;
