import {
  ProjectId,
  Status,
  StorageKeys,
  TProject,
  TTodo,
  TodoId,
} from '../types/types';

//CRUD Create Read Update Delete

export const getAllTodos = (): TTodo[] => {
  return JSON.parse(localStorage.getItem(StorageKeys.Todos) ?? '[]');
};

export const setAllTodos = (todos: TTodo[]) => {
  localStorage.setItem(StorageKeys.Todos, JSON.stringify(todos));
};

export const getTodo = (id: TodoId) => {
  return getAllTodos().find((todo: TTodo) => todo.id === id);
};

export const deleteTodo = (id: TodoId) => {
  const todos = getAllTodos();
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    localStorage.setItem(StorageKeys.Todos, JSON.stringify(todos));
  }
};

export const updateTodo = (todo: TTodo) => {
  const todos = getAllTodos();
  const index = todos.findIndex(item => item.id === todo.id);
  if (index !== -1) {
    todos.splice(index, 1, todo);
    localStorage.setItem(StorageKeys.Todos, JSON.stringify(todos));
  }
};

export const getAllTodosByStatusAndProjectId = (
  status: Status,
  projectId: ProjectId,
): TTodo[] => {
  return JSON.parse(localStorage.getItem(StorageKeys.Todos) ?? '[]').filter(
    (todo: TTodo) => todo.status === status && todo.projectId === projectId,
  );
};

export const getAllProjects = (): TProject[] => {
  return JSON.parse(localStorage.getItem(StorageKeys.Projects) ?? '[]');
};

export const setAllProjects = (todos: TProject[]) => {
  localStorage.setItem(StorageKeys.Projects, JSON.stringify(todos));
};

export const getAllTodosByProjectId = (id: ProjectId): TTodo[] => {
  return getAllTodos().filter((todo: TTodo) => todo.projectId === id);
};
