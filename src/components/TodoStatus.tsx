import {Status} from '../types/types';
import styles from './TodoStatus.module.css';

type TodoStatusProps = {
  status: Status | undefined;
  setStatus: (status: Status) => void;
};

export const TodoStatus = ({status, setStatus}: TodoStatusProps) => {
  const onStatusClick = () => {
    if (status === Status.Queue) {
      setStatus(Status.Development);
    }

    if (status === Status.Development) {
      setStatus(Status.Done);
    }

    if (status === Status.Done) {
      setStatus(Status.Queue);
    }
  };

  return (
    <div className={styles.status}>
      <p>Статус</p>
      <span className={styles.button} onClick={onStatusClick}>
        {status === Status.Queue
          ? 'В очереди'
          : status === Status.Development
          ? 'В разработке'
          : 'Выполнено'}
      </span>
    </div>
  );
};
