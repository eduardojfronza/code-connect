import { Comment } from "..";
import styles from "./commentList.module.css";

export const CommentList = ({ comments }) => {
  return (
    <ul className={styles.list}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
};
