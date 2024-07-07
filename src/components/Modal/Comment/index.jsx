"use client";

import styles from "./commentModal.module.css";
import { IconButton } from "@/components/Button/IconButton";
import { Modal } from "..";
import { Chat } from "@/components/Icons/Chat";
import { useRef } from "react";
import { Subheading } from "@/components/Subheading";
import { Textarea } from "@/components/TextArea";
import { SubmitButton } from "@/components/Button/SubmitButton";

export const ModalComment = ({ action }) => {
  const modalRef = useRef(null);

  return (
    <>
      <Modal ref={modalRef}>
        <form
          action={action}
          onSubmit={() => modalRef.current.closeModal()}
          className={styles.form}
        >
          <Subheading>Deixe seu comentário sobre o post:</Subheading>

          <Textarea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={styles.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};
