"use client";

import styles from "./error/error.module.css";

import { useEffect } from "react";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { ArrowBack } from "@/components/Icons/ArrowBack";

export default function Error({ error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Image src={'/assets/500.png'} width={657} height={367}/>
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={styles.text}>
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>
      
      <Link href="/" className={styles.link}>
        Voltar ao feed <ArrowBack color="#81FE88" />
      </Link>
    </div>
  );
}
