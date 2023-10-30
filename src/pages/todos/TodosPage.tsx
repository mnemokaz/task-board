import TodosForm from './TodosForm';
import {TodosList} from './TodosList';
import {ProjectId, Status, TTodo} from '../../types/types';
import styles from './TodosPage.module.css';
import {getAllTodosByProjectId, setAllTodos} from '../../utils/storage';
import {useParams} from 'react-router-dom';
import {makeNewTodo, searchTodos} from '../../utils/todo';
import {useEffect, useState} from 'react';

function TodosPage() {
  const {projectId} = useParams();

  const allTodos = projectId
    ? getAllTodosByProjectId(+projectId as ProjectId)
    : [];

  const [todos, setTodos] = useState(allTodos);
  const [search, setSearch] = useState('');

  const addTodosHandler = (text: string) => {
    if (projectId) {
      const newTodo: TTodo = makeNewTodo(text, todos, +projectId as ProjectId);
      setAllTodos([...todos, newTodo]);
      updateAction();
    }
  };

  const updateAction = () => {
    projectId && setTodos(getAllTodosByProjectId(+projectId as ProjectId));
  };

  useEffect(() => {
    console.log(searchTodos(allTodos, search));

    if (!search) {
      projectId && setTodos(allTodos);
    } else {
      setTodos(searchTodos(allTodos, search));
    }
  }, [search, projectId]);

  return (
    <div className="App">
      <h1>Задачи</h1>
      <TodosForm
        addTodos={addTodosHandler}
        search={search}
        setSearch={setSearch}
      />

      <div className={styles.layout}>
        <TodosList
          allTodos={todos}
          status={Status.Queue}
          update={updateAction}
        />
        <TodosList
          allTodos={todos}
          status={Status.Development}
          update={updateAction}
        />
        <TodosList
          allTodos={todos}
          status={Status.Done}
          update={updateAction}
        />
      </div>
    </div>
  );
}

export default TodosPage;
