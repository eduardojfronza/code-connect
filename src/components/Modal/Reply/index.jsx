"use client";

import { useRef } from "react";

import styles from "./reply.module.css";
import { Comment } from "@/components/Comment";
import { Textarea } from "@/components/TextArea";
import { SubmitButton } from "@/components/Button/SubmitButton";
import { Modal } from "..";
import { postReply } from "@/actions";

export const ReplyModal = ({ comment, post }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const action = postReply.bind(null, comment);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action}>
          <div className={styles.body}>
            <Comment comment={comment} />
          </div>
          <div className={styles.divider}></div>
          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={styles.btn} onClick={openModal}>
        Responder
      </button>
    </>
  );
};
