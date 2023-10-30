import {useEffect} from 'react';
import styles from './TodoFileUploader.module.css';

type TodoFileUploaderProps = {
  image: string;
  setImage: (url: string) => void;
};

const img = document.getElementById('photoElement');

export const TodoFileUploader = ({image, setImage}: TodoFileUploaderProps) => {
  const reader = new FileReader();

  reader.addEventListener('load', res => {
    setImage(res.target?.result as string);
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event?.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image && img) {
      img.setAttribute('src', image);
    }
  }, [image]);

  return (
    <form className={styles.fileUploader}>
      <input
        id={styles.fileLoaderButton}
        type="file"
        className={styles.fileUploaderPreview}
        onChange={handleOnChange}
      />
      <img
        id="photoElement"
        src={image ? image : require('../no-foto.jpg')}
        className={styles.fileUploaderPreview}
        alt="preview"
      />
    </form>
  );
};
