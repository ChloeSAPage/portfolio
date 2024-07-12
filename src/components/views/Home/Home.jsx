import projectData from "../../../assets/project-data.json";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { MdEmail } from "react-icons/md";
import styles from "./Home.module.css";

function Home() {
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
            <h1 className={styles.heading}>Hiya! My name is Chloe Page.</h1>

            <h2 className={styles.title}>
                A<span className={styles.underline}>bout M</span>e
            </h2>
            <p>
                I'm a Junior Developer, with a background in microbiology. I
                like making things.
            </p>
            <p>
                I completed TechNative Academy's 16-week full-stack bootcamp and
                CodeFirstGirls Degree: Software Engineering concurrently.
            </p>
            <h3>
                T<span className={styles.underline}>echnical Skill</span>s
            </h3>
            <div className={styles.skillsContainer}>
                <div className={styles.technative}>
                    <h4 className={styles.headingfour}>TechNative</h4>
                    <p>
                        My time at TechNative has given me a solid understanding
                        of many technologies such as JavaScript, React, Redux,
                        Node, Express, PostgreSQL, Mocha, Chai, Git and GitHub.
                        Culminating in a final fullstack PERN project.
                    </p>
                    <p>
                        We followed Agile practices, having daily standups and
                        retrospectives, which continued during the three group
                        projects that were completed during my time (see below).
                    </p>
                    <img
                        src="images/technative-project3.jpg"
                        alt=""
                        className={styles.image}
                    />
                </div>
                <div className={styles.cfg}>
                    <h4 className={styles.headingfour}>
                        CFG Degree: Software Engineering
                    </h4>
                    <p>
                        I graduated from the CFG Degree: Software Engineering
                        with a <strong>94% </strong>
                        overall grade. During this microdegree we covered a vast
                        array of topics, namely:
                        <strong>
                            JavaScript, Python, MySQL, Git, GitHub, Debugging,
                            Testing, Agile, APIs, Jira, Object Oriented
                            Programming, Data Types (Stacks, Queues, Hash
                            Tables, LinkedLists, Binary Trees, Graphs),
                            Algorithms, and Recursion
                        </strong>
                    </p>
                    <h5 className={styles.headingfour}>Grades</h5>
                    <p>
                        Foundation Exam: <strong>92%</strong>
                    </p>
                    <p>
                        Specialisation Exam: <strong>100%</strong>
                    </p>
                    <p>
                        Course Homework x 4: <strong>100%</strong>
                    </p>
                    <p>
                        Final Group Project: <strong>84%</strong>
                    </p>
                </div>
            </div>

            <h3 className={styles.subheading}>
                H<span className={styles.underline}>obbie</span>s
            </h3>

            <p>
                I like playing video games (I've played League of Legends since
                2014!) and watching Esports.
            </p>
            <p>I love nature and I started birdwatching early 2024.</p>
            <p>I enjoy hiking.</p>
            <p>I like biology, specifically microbiology.</p>
            <p>I love learning new things!</p>
            <p>I like coding and problem solving.</p>

            <h2 className={styles.title}>
                C<span className={styles.underline}>ontact M</span>e
            </h2>
            <p>Get in touch!</p>
            <p>
                <MdEmail /> chloesapagepersonal@gmail.com
            </p>

            <h2 className={styles.title}>
                P<span className={styles.underline}>roject</span>s
            </h2>
            {projects}
        </div>
    );
}

export default Home;
