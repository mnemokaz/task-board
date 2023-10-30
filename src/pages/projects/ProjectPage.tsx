import {useEffect, useState} from 'react';
import ProjectsForm from './ProjectsForm';
import ProjectsList from './ProjectsList';
import {v4 as uuidv4} from 'uuid';
import {ProjectId, TProject} from '../../types/types';
import {getAllProjects, setAllProjects} from '../../utils/storage';
import {makeCorrectEnding} from '../../utils/wordEndings';

function ProjectsPage() {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    refreshList();
  }, []);

  const refreshList = () => {
    setProjects(getAllProjects());
  };

  const addProjectHandler = (text: string) => {
    const newProject: TProject = {
      text: text,
      isCompleted: false,
      id: (projects.length + 1) as ProjectId,
    };
    setAllProjects([...projects, newProject]);
    refreshList();
  };

  const deleteProjectHandler = (id: ProjectId) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setAllProjects(updatedProjects);
    refreshList();
  };

  const toggleProjectHandler = (id: ProjectId) => {
    setProjects(
      projects.map(project => {
        return project.id === id
          ? {...project, isCompleted: !project.isCompleted}
          : {...project};
      }),
    );
  };

  const completedProjectsCount = projects.filter(
    project => project.isCompleted,
  ).length;

  return (
    <div className="App">
      <h1>Проекты</h1>
      <ProjectsForm addProject={addProjectHandler} />
      <ProjectsList
        projects={projects}
        deleteProject={deleteProjectHandler}
        toggleProject={toggleProjectHandler}
      />
      {completedProjectsCount > 0 && (
        <h2>{makeCorrectEnding(completedProjectsCount)}</h2>
      )}
    </div>
  );
}

export default ProjectsPage;
