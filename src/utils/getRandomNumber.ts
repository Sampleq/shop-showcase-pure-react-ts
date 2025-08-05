// Случайное целое число от min до max (включительно), с одинаковой вероятностью
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min + 1));
}
