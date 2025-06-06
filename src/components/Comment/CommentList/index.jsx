import { ReplyModal } from "@/components/Modal/Reply";
import { Comment } from "..";
import styles from "./commentList.module.css";
import { Replies } from "@/components/Replies";

export const CommentList = ({ comments }) => {
  return (
    <ul className={styles.list}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
          <ReplyModal comment={comment} />
          <Replies comment={comment} />
        </li>
      ))}
    </ul>
  );
};
