import styles from "./SiteFooter.module.css";

function SiteFooter() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.content}>Chloe Page 2024</p>
            <svg
                className={styles.wave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#fdc435"
                    fill-opacity="1"
                    d="M0,256L48,224C96,192,192,128,288,112C384,96,480,128,576,154.7C672,181,768,203,864,181.3C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}

export default SiteFooter;
