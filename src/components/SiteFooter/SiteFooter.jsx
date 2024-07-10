import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import styles from "./SiteFooter.module.css";

function SiteFooter() {
    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/chloesapage/");
    };

    const goToGitHub = () => {
        window.open("https://github.com/ChloeSAPage");
    };

    const email = "chloesapagepersonal@gmail.com";
    const subject = "Hello!";
    const body = "Hi Chloe, I just saw your portfolio!";

    return (
        <div className={styles.wrapper}>
            <div className={styles.iconWrapper}>
                <IconContext.Provider
                    value={{
                        className: styles.icons,
                        size: "1.5em",
                        color: "black",
                    }}
                >
                    <button
                        className={styles.iconButton}
                        onClick={() => goToLinkedIn()}
                    >
                        <FaLinkedin />
                    </button>
                    <button className={styles.iconButton}>
                        <a
                            className={styles.iconLink}
                            href={`mailto:${email}?subject=${encodeURIComponent(
                                subject
                            )}&body=${encodeURIComponent(body)}`}
                        >
                            <MdEmail />
                        </a>
                    </button>
                    <button
                        className={styles.iconButton}
                        onClick={() => goToGitHub()}
                    >
                        <IoLogoGithub />
                    </button>
                </IconContext.Provider>
            </div>
            <p className={styles.content}>Chloe Page 2024</p>
            <svg
                className={styles.wave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#fdc435"
                    d="M0,256L48,224C96,192,192,128,288,112C384,96,480,128,576,154.7C672,181,768,203,864,181.3C960,160,1056,96,1152,69.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
}

export default SiteFooter;
