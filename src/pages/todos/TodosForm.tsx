import {useState} from 'react';
import styles from './TodosForm.module.css';

type TodosFormProps = {
  search: string;
  addTodos: (text: string) => void;
  setSearch: (text: string) => void;
};

const TodosForm = ({search, addTodos, setSearch}: TodosFormProps) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    text.length > 3 && addTodos(text);
    setText('');
  };
  return (
    <div className={styles.TodosFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Введите новую задачу"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
      <input
        className={styles.search}
        placeholder="Поиск"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </div>
  );
};

export default TodosForm;
