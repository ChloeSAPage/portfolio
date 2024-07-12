import styles from "./AboutMe.module.css";

function AboutMe() {
    return (
        <>
            <h2>T<span className={styles.underline}>echnical Skill</span>s</h2>
            <div className={styles.skillsContainer}>
                <div className={styles.technative}>
                    <h4 className={styles.headingfour}>
                        TechNative Digital Academy
                    </h4>
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
                        src="images/technative-everyonebutmostlychloe.jpg"
                        alt="The TechNative Gang"
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit ut natus tempore, provident suscipit dolorem cumque,
                        sed amet voluptate molestiae corrupti mollitia ratione
                        aliquid modi! Quia facere hic esse iste.
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
                    <img
                        src="images/CFGDegree-Logo-2-768x384.png"
                        alt="CFG Degree Logo"
                        className={styles.cfgimage}
                    />
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
        </>
    );
}

export default AboutMe;
