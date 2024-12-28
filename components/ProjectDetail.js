import projects from "../projects.json";
import styles from "../styles/ProjectDetail.module.css";
import Pictures from "./Pictures";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectDetail(props) {
    const router = useRouter();
    let project = projects.find(project => project.id === Number(props.projectId));
    let technoStyle = project?.color && { backgroundColor: project.color };
    return (
        <div className={styles.global}>
            <div>
                <button className={styles.goBackBtn} onClick={() => router.back()}>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x"/>
                </button>
            </div>
            <h2 className={styles.title}>{project?.title}</h2>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <div className={styles.usedTechnos}>
                        {project?.usedTechnos?.map((usedTechno, i) => (
                            <div
                                key={i}
                                style={technoStyle}
                                className={styles.usedTechno}
                            >
                                {usedTechno}
                            </div>
                        ))}
                    </div>
                    <div className={styles.line}></div>
                    {project?.website && (
                        <div className={styles.linkWebsite}>
                            <Link href={project.website}>Site web</Link>
                            <div className={styles.line}></div>
                        </div>
                    )}
                    <p>{project?.description}</p>
                </div>
                <div className={styles.rightSection}>
                    {project?.gitHubLink.length === 1 ? (
                        <div className={styles.github}>
                            <Link href={project.gitHubLink[0]}>
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
                    ) : (
                        project?.gitHubLink.length === 2 && (
                            <div className={styles.githubs}>
                                <div className={styles.github}>
                                    <span>FrontEnd</span>
                                    <Link href={project.gitHubLink[0]}>
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
                                <div className={styles.github}>
                                    
                                    <Link href={project.gitHubLink[1]}>
                                        <a>
                                            <Image
                                                src="/images/github-mark.svg"
                                                alt="GitHub logo"
                                                width={30}
                                                height={30}
                                            />
                                        </a>
                                    </Link>
                                    <span>BackEnd</span>
                                </div>
                            </div>
                        )
                    )}
                    <Pictures
                        pictures={project?.pictures}
                        mobile={project?.mobile}
                    />
                </div>
            </div>
        </div>
    );
}
