import styles from './Todo.module.css';
import {TTodo, TodoId} from '../../types/types';
import React from 'react';

type TodoProps = {
  todo: TTodo;
  onPress: (id: TodoId) => void;
  handleDrag: (e: React.DragEvent, id: string) => void;
};

function Todo({todo, onPress, handleDrag}: TodoProps) {
  const onOpen = () => {
    onPress(todo.id);
  };

  return (
    <div
      draggable
      onDragStart={e => handleDrag(e, todo.id)}
      onClick={onOpen}
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}>
      <div className={styles.todoText}>{todo.text}</div>
    </div>
  );
}

export default Todo;
