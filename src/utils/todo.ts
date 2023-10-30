import {v4 as uuidv4} from 'uuid';
import {Priority, ProjectId, Status, TTodo, TodoId} from '../types/types';

export const makeNewTodo = (
  text: string,
  todos: TTodo[],
  projectId: ProjectId,
) => {
  return {
    text: text,
    isCompleted: false,
    id: uuidv4() as TodoId,
    projectId: +projectId as ProjectId,
    taskNumber: todos.length + 1,
    title: '',
    description: '',
    creationAt: new Date().getTime(),
    timeWork: null,
    expirationDate: null,
    priority: Priority.Low,
    file: '',
    status: Status.Queue,
    addSubTask: [],
    comment: [],
  };
};

export const searchTodos = (todos: TTodo[], search: string) => {
  const foundTodos = todos
    .filter(todo => todo.taskNumber === parseInt(search))
    .concat(todos.filter(todo => todo.text.includes(search)));
  return foundTodos;
};
