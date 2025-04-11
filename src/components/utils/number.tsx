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
  // Vérifier si l'entrée est une fraction
  if (input.includes("/")) {
    return false;
  }
  // Convertir l'entrée en nombre
  const number = convertToNumber(input);
  // Vérifier si le nombre est fini
  return Number.isFinite(number);
}

export function round_offDecimal(input: number, decimalPlaces: number): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(input * factor) / factor;
}

function maxDecimals(num1: number, num2: number): number {
  // Convertir les nombres en chaînes de caractères
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  // Compter le nombre de décimales pour chaque nombre
  const decimals1 = strNum1.includes(".") ? strNum1.split(".")[1].length : 0;
  const decimals2 = strNum2.includes(".") ? strNum2.split(".")[1].length : 0;

  // Retourner le maximum des deux comptes
  return Math.max(decimals1, decimals2);
}

export function sumDecimal(num1: number, num2: number): number {
  return round_offDecimal(num1 + num2, maxDecimals(num1, num2));
}
