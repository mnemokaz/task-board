import {RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri';
import {FaCheck} from 'react-icons/fa';
import styles from './Project.module.css';
import {ProjectId, TProject} from '../../types/types';
import {Link, useNavigate} from 'react-router-dom';
import {MouseEvent} from 'react';

type ProjectProps = {
  project: TProject;
  deleteProject: (id: ProjectId) => void;
  toggleProject: (id: ProjectId) => void;
};

function Project({project, deleteProject, toggleProject}: ProjectProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/todos/${project.id}`);
      }}
      className={`${styles.project} ${
        project.isCompleted ? styles.completedProject : ''
      }`}>
      <RiTodoFill className={styles.projectIcon} />
      <div className={styles.projectText}>{project.text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          deleteProject(project.id);
        }}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={(e: MouseEvent) => {
          e.stopPropagation();
          toggleProject(project.id);
        }}
      />
    </div>
  );
}

export default Project;
