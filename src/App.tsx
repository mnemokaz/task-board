import './App.css';
import {HashRouter} from 'react-router-dom';
import ProjectsPage from './pages/projects/ProjectPage';
import TodosPage from './pages/todos/TodosPage';
import Modal from 'react-modal';
import {Routes, Route} from 'react-router-dom';

Modal.setAppElement('#root');

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="todos">
          <Route path=":projectId" element={<TodosPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
