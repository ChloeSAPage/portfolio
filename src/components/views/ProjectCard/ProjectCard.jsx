import styles from "./ProjectCard.module.css";
import YellowButton from "../../reusable/YellowButton/YellowButton.jsx";
import WhiteButton from "../../reusable/WhiteButton/WhiteButton.jsx";

function ProjectCard({
    name,
    description,
    githubLink,
    link,
    image,
    languages,
    libraries,
    index,
}) {
    const goToGitHub = () => {
        window.open(githubLink);
    };

    const goToProject = () => {
        window.open(link);
    };

    return (
        <div
            className={`${styles.wrapper} ${
                index % 2 === 0 ? styles.right : styles.left
            }`}
        >
            <div className={styles.contentWrapper}>
                <h2 className={styles.name}>{name}</h2>
                <p>{description}</p>
                <p>Languages: {languages}</p>
                <p>{libraries === "" ? "" : `Libraries: ${libraries}`}</p>
                <div className={styles.buttonContainer}>
                    {index % 2 === 0 ? (
                        <YellowButton
                            className={styles.yellowButton}
                            text="View code"
                            onClick={() => goToGitHub()}
                        />
                    ) : (
                        <WhiteButton
                            text="View code"
                            onClick={() => goToGitHub()}
                        />
                    )}
                    {link === "" ? (
                        ""
                    ) : index % 2 === 0 ? (
                        <WhiteButton
                            text="View Project"
                            onClick={() => goToProject()}
                        />
                    ) : (
                        <YellowButton
                            className={styles.yellowButton}
                            text="View Project"
                            onClick={() => goToProject()}
                        />
                    )}
                </div>
            </div>

            <img
                className={styles.image}
                src={image}
                alt={`An image of Chloe's ${name} project`}
            />
        </div>
    );
}

export default ProjectCard;
