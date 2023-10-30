import {useState} from 'react';
import {TodoModal} from '../../components/TodoModal';
import {Status, TTodo, TodoId} from '../../types/types';
import Todo from './Todo';
import styles from './TodosList.module.css';
import {getTodo, updateTodo} from '../../utils/storage';

type TodosListProps = {
  allTodos: TTodo[];
  status: Status;
  update: () => void;
};

export const TodosList = ({allTodos, status, update}: TodosListProps) => {
  const [id, setId] = useState<TodoId | null>(null);

  const title =
    status === Status.Done
      ? 'Выполнено'
      : status === Status.Development
      ? 'В разработке'
      : 'В очереди';

  const todos = allTodos.filter(todo => todo.status === status);

  const handleDrag = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('id', id);
  };

  const handleOnDrop = (e: React.DragEvent) => {
    const todoId = e.dataTransfer.getData('id');
    const todo = getTodo(todoId as TodoId);
    todo &&
      updateTodo({
        ...todo,
        status,
      });
    update();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.todosListContainer}
      onDrop={handleOnDrop}
      onDragOver={handleDragOver}>
      <h3>{title}</h3>
      {!todos.length && <h2>Нет задач</h2>}
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onPress={setId}
          handleDrag={handleDrag}
        />
      ))}
      {id && (
        <TodoModal
          id={id}
          isOpen={!!id}
          closeModal={() => {
            setId(null);
            update();
          }}
        />
      )}
    </div>
  );
};
