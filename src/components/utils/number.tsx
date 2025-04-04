export function getRandomNumber(min: number = 0, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convertToNumber(input: string): number {
  // Remplacer les virgules par des points
  const converted = input.replace(",", ".");
  // Convertir la chaîne en nombre
  return parseFloat(converted);
}

export function isDecimal(input: string): boolean {
  // Convertir l'entrée en nombre
  const number = convertToNumber(input);
  // Vérifier si le nombre est fini
  return Number.isFinite(number);
}
