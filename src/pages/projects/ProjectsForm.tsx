import {useState} from 'react';
import styles from './ProjectsForm.module.css';

function ProjectsForm({addProject}: {addProject: (text: string) => void}) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProject(text);
    setText('');
  };
  return (
    <div className={styles.ProjectsFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Введите новый проект"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default ProjectsForm;
