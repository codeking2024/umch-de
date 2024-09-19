import React from "react";
import styles from "./sidebar.module.css";
import { PhoneCallIcon } from "lucide-react"

const Sidebar: React.FC = () => {

    return (
        <>
            <div className={`${styles.sidebar}`}>
                <div className={`${styles.applyButton}`}>Jetzt bewerben</div>
                <div className={`${styles.iconContainer} p-2`}>
                    <a href={""} className={`${styles.borderYellow} border  border-2 rounded-circle p-2 my-2`}>
                        <img src="/icon/Icon Uni.svg" width={28} height={28} alt="Uni" />
                    </a>
                    <a href={""} className={`${styles.borderYellow} border  border-2 rounded-circle p-2 my-2`}>
                        <img src="/icon/Icon Letter.svg" width={28} height={28} alt="Letter" />
                    </a>
                    <a href={""} className={`${styles.borderYellow} border border-2 rounded-circle p-2 my-2`}>
                        <img src="/icon/Icon Camera.svg" width={28} height={28} alt="Camera" />
                    </a>
                    <a href={""} className={`${styles.borderYellow} border  border-2 rounded-circle p-2 my-2`}>
                        <PhoneCallIcon style={{ color: "fbe949" }} width={28} height={28} />
                    </a>

                </div>
            </div>
        </>
    )
}

export default Sidebar;