"use client";

import styles from "./modal.module.css";
import { forwardRef, useRef, useImperativeHandle } from "react";

export const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef(null);

  const openModal = () => {
    dialogRef.current.showModal();
  };

  const closeModal = () => {
    dialogRef.current.close();
  };

  useImperativeHandle(ref, () => {
    return {
      closeModal,
      openModal,
    };
  });

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <header className={styles.header}>
        <button onClick={closeModal}>X</button>
      </header>
      {children}
    </dialog>
  );
});
