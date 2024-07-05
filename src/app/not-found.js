import Image from "next/image";
import Link from "next/link";

import styles from './error/error.module.css'
import { ArrowBack } from "@/components/Icons/ArrowBack";
import { Heading } from "@/components/Heading";

export default async function NotFound() {
  return (
    <div className={styles.container}>
      <Image src={'/assets/404.png'} width={657} height={367}/>
      
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={styles.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
      
      <Link href="/"  className={styles.link}>
        Voltar ao feed <ArrowBack color='#81FE88'/>
      </Link>
    </div>
  )
}