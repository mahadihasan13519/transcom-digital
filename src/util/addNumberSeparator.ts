
// add comma sperator to number
// the format is 1,00,000
export function addNumberSeparator(number: number): string {
  const formattedNumber = number.toLocaleString('en-IN');
  return formattedNumber;
}
