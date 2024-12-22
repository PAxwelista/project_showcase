import Link from "next/link";
import Project from "../components/Project";
import projects from "../projects.json";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.global}>
            <h1 className={styles.title}>Liste des projets réalisés par Axel Madotto</h1>
            <div className={styles.list}>
                {projects.map(project => (
                    <Project key={project.id} {...project} />
                ))}
            </div>
            <Link  href="https://github.com/PAxwelista"><a className={styles.link}>Lien Github</a></Link>
        </div>
    );
}
