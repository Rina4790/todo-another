import { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./TodoList.module.css";

interface IProps {
  text: string;
  time: string;
  onDelete: () => void;
}

export const TodoItem = ({
  text,
  time,
  onDelete,
}: IProps) => {

  return (
    <div className={styles.todoItem}>
      <div className={styles.text}>{text}</div>
      <div className={styles.container}>
      	<div className={styles.time}>{time}</div> 
			  <Button onClick={onDelete}
				  variant="success">
				  <img src="/images/x.svg" />
			  </Button>
      </div>
    </div>
  );
};

