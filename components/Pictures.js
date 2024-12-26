import Image from "next/image";
import styles from "../styles/Pictures.module.css";
import { Modal } from "antd";
import { useState } from "react";

export default function Pictures({ pictures, mobile = false }) {
    const [picture, setPicture] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleClick = link => {
        setOpenModal(true);
        setPicture(link);
    };
    return (
        <div className={styles.global}>
            {pictures?.map((picture, i) => (
                <div
                    key={i}
                    className={styles.picture}
                >
                    <Image
                        className={styles.Image}
                        objectFit={"contain"}
                        width={mobile ? 200 : 400}
                        height={mobile ? 400 : 200}
                        src={picture}
                        onClick={() => handleClick(picture)}
                    />
                </div>
            ))}
            <Modal
                width="100vw"
                height="60vh"
                open={openModal}
                footer={null}
                onCancel={() => setOpenModal(false)}
                styles={{
                    content: { textAlign: "center" },
                }}
            >
                <img
                    src={picture}
                    className={styles.zoomedPicture}
                />
            </Modal>
        </div>
    );
}
