import styles from './page.module.css'

import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from 'next/link';

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
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

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1
  const {data: posts, prev, next} = await getAllPosts(currentPage)
  
  return (
    <main className={styles.grid}>
      {posts.map(post =>  <CardPost post={post} key={post.id}/>)}

    <div className={styles.links}>
      {prev && <Link href={`/?page=${prev}`}>Página anteriror</Link>}
      {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
    </div>
    </main>
  );
}
