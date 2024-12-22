import styles from "../styles/Project.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Project(props) {
    const description = props.description || "";
    const router = useRouter();
    const handleClick = () => {
        router.push(`/project/${props.id}`);
    };
    const shortDescription =
        description.length > 150 ? description?.split("").slice(0, 150).join("") + "..." : description;
    return (
        <div
            className={styles.global}
            onClick={handleClick}
        >
            <div className={styles.textSection}>
                <h2>{props.title}</h2>
                <p>{shortDescription}</p>
            </div>
            <div className={styles.pictureSection}>
                {props.pictures && (
                    <Image
                        className={styles.picture}
                        width={200}
                        height={200}
                        src={props.pictures[0]}
                        alt={props.title}
                    />
                )}
            </div>
        </div>
    );
}
