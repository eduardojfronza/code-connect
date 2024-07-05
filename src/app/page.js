import styles from './page.module.css'

import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts")
  .catch(error => {
    logger.error('Erro de rede: ' + error.message);
    return null;
  });

  if(!response) {
    logger.error('Ops, alguma coisa aconteceu!')
    return []
  }

  logger.info("Posts obtidos com sucesso!")
  return response.json()
}

export default async function Home() {
  const posts = await getAllPosts()
  
  return (
    <main className={styles.grid}>
      {posts.map((post, idx) =>  <CardPost post={post} key={idx}/>)}
    </main>
  );
}
