import styles from "./ProjectCard.module.css";
import YellowButton from "../../reusable/YellowButton/YellowButton.jsx";
import WhiteButton from "../../reusable/WhiteButton/WhiteButton.jsx";

function ProjectCard({
    name,
    description,
    githubLink,
    image,
    languages,
    libraries,
    index,
}) {
    const handleClick = () => {
        window.open(githubLink);
    };

    return (
        <div
            className={`${styles.wrapper} ${
                index % 2 === 0 ? styles.right : styles.left
            }`}
        >
            <div className={styles.contentWrapper}>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Languages: {languages}</p>
                <p>{libraries === "" ? "" : `Libraries: ${libraries}`}</p>
                {index % 2 === 0 ? (
                    <YellowButton className={styles.yellowButton} text="GitHub" onClick={() => handleClick()} />
                ) : (
                    <WhiteButton text="GitHub" onClick={() => handleClick()} />
                )}
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
