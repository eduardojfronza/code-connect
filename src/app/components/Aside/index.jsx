import Image from "next/image"
import styles from './aside.module.css'

export const Aside = () => {
    return(
        <aside className={styles.aside}>
            <Image priority src={'/assets/logo.png'} alt="Logo da code connect" width={128} height={40}  objectFit="contain"/>
        </aside>
    )
}