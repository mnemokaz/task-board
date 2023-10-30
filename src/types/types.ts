export type Brand<T, U> = T & {__brand: U};

export type ProjectId = Brand<number, 'project_id'>;
export type TodoId = Brand<string, 'todo_id'>;

export type TProject = {
  id: ProjectId;
  text: string;
  isCompleted: boolean;
};

export type TTodo = {
  id: TodoId;
  projectId: ProjectId;
  text: string;
  isCompleted: boolean;
  taskNumber: number;
  title: string;
  description: string;
  creationAt: number;
  timeWork: number | null;
  expirationDate: Date | null;
  priority: Priority;
  file: string;
  status: Status;
  addSubTask: string[];
  comment: string[];
};

export enum Priority {
  High = 'High',
  Medium = 'Medium',
  Low = 'Low',
}

export enum Status {
  Queue = 'Queue',
  Development = 'Development',
  Done = 'Done',
}

export enum StorageKeys {
  Todos = 'Todos',
  Projects = 'Projects',
}
