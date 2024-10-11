// Esta función recibe una cadena de texto y devuelve la parte de la cadena que se encuentra antes de la primera coma
// Si no hay comas en la cadena, devuelve la cadena completa.

export const getStringBeforeComma = (inputString: string) => {
  const indexOfComma = inputString.indexOf(",");

  if (indexOfComma !== -1) {
    // Devuelve la subcadena desde el inicio hasta la posición de la coma, eliminando espacios en blanco
    return inputString.slice(0, indexOfComma).trim();
  }
  return inputString.trim();
};
