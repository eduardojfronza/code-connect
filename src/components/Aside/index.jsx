import Image from "next/image";
import styles from "./aside.module.css";
import Link from "next/link";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <Image
          priority
          src={"/assets/logo.png"}
          alt="Logo da code connect"
          width={128}
          height={40}
          objectFit="contain"
        />
      </Link>
    </aside>
  );
};
