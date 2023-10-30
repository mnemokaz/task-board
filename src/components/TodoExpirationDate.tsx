import Calendar from 'react-calendar';
import styles from './TodoExpirationDate.module.css';
import {useState} from 'react';
import dayjs from 'dayjs';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type TodoExpirationDateProps = {
  time: string;
  expirationDate: Date | null;
  setExpirationDate: (date: Date) => void;
};

export const TodoExpirationDate = ({
  time,
  expirationDate,
  setExpirationDate,
}: TodoExpirationDateProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (value: Value) => {
    if (value instanceof Date) {
      setExpirationDate(value);
    }
    setIsOpen(false);
  };

  return (
    <>
      <p onClick={() => setIsOpen(!isOpen)} className={styles.expirationDate}>
        {expirationDate
          ? dayjs(expirationDate).format('D.MM.YYYY')
          : 'Выбрать дату'}
      </p>
      {isOpen && (
        <div style={{position: 'absolute', bottom: 0, left: 20}}>
          <Calendar onChange={onChange} value={expirationDate} />
        </div>
      )}
    </>
  );
};
