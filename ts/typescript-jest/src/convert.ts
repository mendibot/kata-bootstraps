import { convertFromArrayToNumber, convertFromNumberToArray } from "./utils";

const romanSigns = {
  1: "I",
  2: "II",
  3: "II",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
};

export const convert = (numb: number): string => {
  // Convert number to array of numbers (ej: 230 -> [2,3,0])
  const arrayNumbers = convertFromNumberToArray(numb);
  console.log(arrayNumbers);

  if (arrayNumbers.length === 1) {
    if (romanSigns[arrayNumbers[0]] === 0) return "ZERO";
    return romanSigns[arrayNumbers[0]];
  } else {
    return "Roman sign not found";
  }

  // if (separatedNumbers.length === 2) {
  //   const decimalValue = convertToWholeNumber();
  // }
};
