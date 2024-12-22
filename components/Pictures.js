import Image from "next/image";
import styles from "../styles/Pictures.module.css"

export default function Pictures({ pictures }) {
    return (
        <div className={styles.global} >
            {pictures?.map((picture,i) => (
                <div key={i} className={styles.picture}>
                <Image
                    
                    width={200}
                    height={200}
                    src={picture}
                />
                </div>
            ))}
        </div>
    );
}
