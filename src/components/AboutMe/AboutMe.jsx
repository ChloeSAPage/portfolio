import styles from "./AboutMe.module.css";

function AboutMe({ isClicked }) {
    return (
        <div className={`${styles.aboutMe} ${isClicked ? "" : styles.hidden}`}>
            <h2>
                T<span className={styles.underline}>echnical Skill</span>s
            </h2>
            <div className={styles.skillsContainer}>
                <div className={styles.technative}>
                    <h4 className={styles.headingfour}>
                        TechNative Digital Academy
                    </h4>
                    <p>
                        My time at TechNative has given me a solid understanding
                        of many technologies such as{" "}
                        <strong>
                            JavaScript, React, Redux, Node, Express, PostgreSQL,
                            Mocha, Chai, Git and GitHub.
                        </strong>{" "}
                        Culminating in a final fullstack PERN project.
                    </p>
                    <p>
                        I practised Agile methodologies through daily standups
                        and retrospectives, which continued during the three
                        group projects that were completed during my time (see
                        below).
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
                        <strong className={styles.listsContainer}>
                            <ul className={styles.list}>
                                <li>Binary Trees</li>
                                <li>Hash Tables</li>
                                <li>LinkedLists</li>
                                <li>Queues</li>
                                <li>Graphs</li>
                                <li>Stacks</li>
                            </ul>
                            <ul className={styles.list}>
                                <li>Time-Space Complexity</li>
                                <li>Algorithms</li>
                                <li>Debugging</li>
                                <li>Recursion</li>
                                <li>Testing</li>
                                <li>OOP</li>
                            </ul>
                            <ul className={styles.list}>
                                <li>JavaScript</li>
                                <li>MySQL</li>
                                <li>Python</li>
                                <li>APIs</li>
                                <li>Jira</li>
                                <li>Git</li>
                            </ul>
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
                    <img
                        src="images/CFGDegree-Logo-2-768x384.png"
                        alt="CFG Degree Logo"
                        className={styles.cfgimage}
                    />
                </div>
            </div>

            <div className={styles.skillsContainer}>
                <div className={styles.degree}>
                    <h3 className={styles.subheading}>
                        B
                        <span className={styles.underline}>
                            Sc Microbiology and my transition into tec
                        </span>
                        h
                    </h3>
                    <p>
                        I have a 2.1 BSc in Microbiology from the University of
                        Reading, where I studied complex biological topics. I
                        loved this. I love learning new things, which is why I
                        got into biology in the first place. There is always
                        something new to learn every week in science.
                    </p>
                    <p>
                        However, when I started working in industry I quickly
                        realised that things I loved about bio at uni were
                        absent in commercial labs. Commercial labs focus on
                        repetitive testing and quick results, leaving little
                        room for creativity, experimentation, or continuous
                        learning.
                    </p>
                    <p>
                        This craving for creativity, experimentation, and
                        learning led me to tech! Where my hunger for doing new
                        things, learning new skills and creating new things is
                        satisfied. Since embarking on my journey I haven't
                        looked back and am so glad I've made the leap from lab
                        to keyboard.
                    </p>
                </div>
                <div className={styles.hobbies}>
                    <h3 className={styles.subheading}>
                        H<span className={styles.underline}>obbie</span>s
                    </h3>
                    <p>
                        I like playing video games (I've played League of
                        Legends since 2014!) and watching Esports.
                    </p>
                    <p>
                        I enjoy hiking and last year I went hiking at Brecon
                        Beacons in Wales, and the Peak District.
                    </p>
                    <p>
                        I love nature and I started birdwatching early 2024. I
                        hope to see a Cuckoo one day!
                    </p>
                    <p>I still like biology, specifically microbiology.</p>
                    <p>I like coding to solve problems.</p>
                    <p>I love learning new things!</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
