import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import ProjectsPage from './pages/projects/ProjectPage';
import TodosPage from './pages/todos/TodosPage';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: '/',
          element: <ProjectsPage />,
        },
        {
          path: '/todos/:projectId',
          element: <TodosPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
