import {ProjectId, TProject as ProjectType} from '../../types/types';
import Project from './Project';
import styles from './ProjectsList.module.css';

type ProjectsListProps = {
  projects: ProjectType[];
  deleteProject: (id: ProjectId) => void;
  toggleProject: (id: ProjectId) => void;
};

function ProjectsList({
  projects,
  deleteProject,
  toggleProject,
}: ProjectsListProps) {
  return (
    <div className={styles.projectsListContainer}>
      {!projects.length && <h2>Проектов нет</h2>}
      {projects.map(project => (
        <Project
          key={project.id}
          project={project}
          deleteProject={deleteProject}
          toggleProject={toggleProject}
        />
      ))}
    </div>
  );
}

export default ProjectsList;
