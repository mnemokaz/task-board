import {makeCorrectEnding} from '../wordEndings';

describe('makeCorrectEnding', () => {
  it('should be correct', () => {
    expect(makeCorrectEnding(1)).toBe('Выполнен 1 проект');
    expect(makeCorrectEnding(2)).toBe('Выполнено 2 проекта');
    expect(makeCorrectEnding(3)).toBe('Выполнено 3 проекта');
    expect(makeCorrectEnding(4)).toBe('Выполнено 4 проекта');
    expect(makeCorrectEnding(5)).toBe('Выполнено 5 проектов');
    expect(makeCorrectEnding(11)).toBe('Выполнено 11 проектов');
    expect(makeCorrectEnding(12)).toBe('Выполнено 12 проектов');
    expect(makeCorrectEnding(15)).toBe('Выполнено 15 проектов');
    expect(makeCorrectEnding(22)).toBe('Выполнено 22 проекта');
    expect(makeCorrectEnding(121)).toBe('Выполнен 121 проект');
  });
});
