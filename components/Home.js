import Link from "next/link";
import Image from "next/image";
import Project from "../components/Project";
import projects from "../projects.json";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.global}>
            <div className={styles.header}>
                <h1 className={styles.title}>Portfolio : Axel Madotto</h1>
                <div className={styles.logos}>
                    <div className={styles.link}>
                        <Link href="https://www.linkedin.com/in/axel-madotto-16391b125">
                            <a>
                                <Image
                                    src="/images/linkedin.png"
                                    alt="Linkedin logo"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.link}>
                        <Link href="https://github.com/PAxwelista">
                            <a>
                                <Image
                                    src="/images/github-mark.svg"
                                    alt="GitHub logo"
                                    width={30}
                                    height={30}
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                {projects.toReversed().map(project => (
                    <Project
                        key={project.id}
                        {...project}
                    />
                ))}
            </div>
        </div>
    );
}
