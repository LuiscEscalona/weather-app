export const getStringBeforeComma = (inputString: string) => {
  const indexOfComma = inputString.indexOf(",");

  if (indexOfComma !== -1) {
    return inputString.slice(0, indexOfComma).trim();
  }
  return inputString.trim();
};
