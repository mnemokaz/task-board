import {Priority} from '../types/types';
import styles from './TodoPriority.module.css';

type TodoPriorityProps = {
  priority: Priority | undefined;
  setPriority: (priority: Priority) => void;
};

export const TodoPriority = ({priority, setPriority}: TodoPriorityProps) => {
  const onPriorityClick = () => {
    if (priority === Priority.Low) {
      setPriority(Priority.Medium);
    }

    if (priority === Priority.Medium) {
      setPriority(Priority.High);
    }

    if (priority === Priority.High) {
      setPriority(Priority.Low);
    }
  };

  return (
    <div className={styles.priority}>
      <p>Приоритет</p>
      <span className={styles.button} onClick={onPriorityClick}>
        {priority === Priority.Low
          ? 'Низкий'
          : priority === Priority.Medium
          ? 'Средний'
          : 'Высокий'}
      </span>
    </div>
  );
};
