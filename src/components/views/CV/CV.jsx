import styles from "./CV.module.css";

function CV() {
    return (
        <div className={styles.wrapper}>
            <h2>CV</h2>
            <a href="public/Chloe-Page-CV-2024.pdf" target="_blank">
                PDF version
            </a>
        </div>
    );
}

export default CV;
