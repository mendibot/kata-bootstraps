// Convierte un array a numeros (ej: [2,3,0] -> 230)
export const convertFromArrayToNumber = (numbers: number[]): number => {
  const stringJoinedNumbers = numbers.join("");
  return Number(stringJoinedNumbers);
};

// Convierte numeros a array de numeros (ej: 230 -> [2,3,0])
export const convertFromNumberToArray = (numb: number): number[] => {
  //1. Convertir a string (ej: 230 -> "230")
  const convertedToString = numb.toString();

  //2. Separar los strings en array (ej: "230" -> ["2", "3", "0"])
  const convertedToArrayString = convertedToString.split("");

  //3. Convertir strings array a numeros array (eje: ["2", "3", "0"] -> [2,3,0])
  const convertedToArrayNumber = convertedToArrayString.map((element) =>
    Number(element),
  );

  return convertedToArrayNumber;
};
