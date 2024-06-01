import styles from "./YellowButton.module.css";

function YellowButton({ text, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
}

export default YellowButton;
