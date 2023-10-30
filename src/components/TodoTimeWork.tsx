import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import styles from './TodoTimeWork.module.css';

type TodoTimeWorkProps = {
  time: string;
  setTime: (time: string) => void;
};

export const TodoTimeWork = ({time, setTime}: TodoTimeWorkProps) => {
  const onChange = (value: string | null) => {
    value && setTime(value);
  };

  return (
    <div className={styles.timePicker}>
      <TimePicker
        onChange={onChange}
        value={time}
        disableClock
        onAbort={() => setTime('')}
      />
    </div>
  );
};
