export const makeCorrectEnding = (number: number) => {
  if (number % 10 === 1 && (number < 10 || number > 20)) {
    return `Выполнен ${number} проект`;
  } else if (number % 10 <= 4 && (number < 10 || number > 20)) {
    return `Выполнено ${number} проекта`;
  } else {
    return `Выполнено ${number} проектов`;
  }
};
