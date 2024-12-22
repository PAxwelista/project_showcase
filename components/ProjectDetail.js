import projects from "../projects.json";
import styles from "../styles/ProjectDetail.module.css";
import Pictures from "./Pictures";
import Link from "next/link";

export default function ProjectDetail(props) {
    let project = projects.find(project => project.id === Number(props.projectId));
    return (
        <div className={styles.global}>
            <h2 className={styles.title}>{project?.title}</h2>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <div className={styles.usedTechnos}>
                        {project?.usedTechnos?.map((usedTechno,i) => (
                            <div key={i} className={styles.usedTechno}>{usedTechno}</div>
                        ))}
                    </div>
                    <p>{project?.description}</p>
                </div>
                <div className={styles.rightSection}>
                    {project?.gitHubLink && <Link href={project.gitHubLink}>Lien GitHub</Link>}
                    <Pictures pictures={project?.pictures} />
                </div>
            </div>
        </div>
    );
}
