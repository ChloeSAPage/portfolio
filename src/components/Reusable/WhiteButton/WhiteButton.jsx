import styles from "./WhiteButton.module.css";

function WhiteButton({ text, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
}

export default WhiteButton;
