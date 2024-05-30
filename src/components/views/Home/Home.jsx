import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.tagline}>Junior Web Developer</h4>
            <h1>Hello! My name is Chloe Page</h1>
            <p>I like making things.</p>
        </div>
    );
}

export default Home;
