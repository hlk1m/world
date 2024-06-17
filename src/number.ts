export function convertNumUnits(number: number) {
  if (number >= 1e9) {
    // Bilion
    return (number / 1e9).toFixed(1) + "b";
  } else if (number >= 1e6) {
    // Milion
    return (number / 1e6).toFixed(1) + "m";
  } else if (number >= 1e3) {
    // Thousand. 1e3 = 1000 | 10의 3제곱
    return (number / 1e3).toFixed(1) + "k";
  } else {
    return number.toLocaleString("en");
  }
}
