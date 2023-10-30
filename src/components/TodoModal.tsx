import Modal from 'react-modal';
import {AiOutlineClose} from 'react-icons/ai';
import styles from './TodoModal.module.css';
import {Fragment, MouseEvent, useState} from 'react';
import {TodoPriority} from './TodoPriority';
import {TodoStatus} from './TodoStatus';
import {deleteTodo, getTodo, updateTodo} from '../utils/storage';
import {Priority, TodoId} from '../types/types';
import {Status} from '../types/types';
import 'react-calendar/dist/Calendar.css';
import {TodoTimeWork} from './TodoTimeWork';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import {TodoExpirationDate} from './TodoExpirationDate';
import {TodoFileUploader} from './TodoFileUploader';
dayjs.locale('ru');

type TodoModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  id: TodoId;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    width: '70%',
    borderRadius: 10,
    overflow: 'scroll',
    height: '80%',
  },
};

export const TodoModal = ({isOpen, closeModal, id}: TodoModalProps) => {
  const todo = getTodo(id);

  const [text, setText] = useState(todo?.text ?? 'Заголовок');
  const [description, setDescription] = useState(
    todo?.description ?? 'Описание',
  );
  const [addSubtask, setSubTask] = useState(todo?.addSubTask[0] ?? '');
  const [comment, setComment] = useState(todo?.comment[0] ?? '');
  const [priority, setPriority] = useState(todo?.priority ?? Priority.Low);
  const [status, setStatus] = useState(todo?.status ?? Status.Queue);

  const [expirationDate, setExpirationDate] = useState<Date | null>(
    todo?.expirationDate ?? null,
  );
  const [time, setTime] = useState<string>('');

  const [file, setFile] = useState<string>(todo?.file ?? '');

  if (!todo) return <Fragment />;

  const onClose = (e: MouseEvent<SVGAElement>) => {
    e.stopPropagation();
    closeModal();
  };

  const onSave = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateTodo({
      ...todo,
      text,
      description,
      addSubTask: [addSubtask],
      comment: [comment],
      priority,
      status,
      expirationDate,
      file,
    });
    closeModal();
  };

  const onDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteTodo(todo.id);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
      <h2>Описание задачи</h2>
      <p>{`№ ${todo.taskNumber}`}</p>
      <input
        placeholder="Заголовок"
        className={styles.input}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        autoFocus
      />

      <input
        placeholder="Описание"
        className={styles.input}
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        autoFocus
      />
      <div className={styles.time}>
        <div>
          <p>Дата создания</p>
          <p className={styles.creationAt}>
            {dayjs(todo.creationAt).format('D.MM.YYYY, h:mm')}
          </p>
        </div>
        <div>
          <p>Время в работе</p>
          <TodoTimeWork time={time} setTime={setTime} />
        </div>
        <div>
          <p>Дата окончания</p>
          <TodoExpirationDate
            time={time}
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
          />
        </div>
      </div>

      <TodoPriority priority={priority} setPriority={setPriority} />
      <TodoFileUploader image={file} setImage={setFile} />

      <TodoStatus status={status} setStatus={setStatus} />

      <input
        placeholder="Добавление подзадачи"
        className={styles.input}
        type="text"
        value={addSubtask}
        onChange={e => setSubTask(e.target.value)}
        autoFocus
      />

      <input
        placeholder="Комментарии"
        className={styles.input}
        type="text"
        value={comment}
        onChange={e => setComment(e.target.value)}
        autoFocus
      />

      <AiOutlineClose className={styles.deleteIcon} onClick={onClose} />
      <div className={styles.containerButton}>
        <button
          className={`${styles.button} ${styles.Section1}`}
          onClick={onDelete}>
          {''} Удалить
        </button>
        <button
          className={`${styles.button} ${styles.Section2}`}
          onClick={onSave}>
          {' '}
          Сохранить
        </button>
      </div>
    </Modal>
  );
};
