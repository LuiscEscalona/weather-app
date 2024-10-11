// Verifica si un texto contiene alguna de las palabras especificadas

// Expresión regular:
// - `\\b`: Asegura que la coincidencia se realice en los límites de palabra,
//
// - `(${escapedWords.join("|")})`: Combina todas las palabras escapadas en
//   una única expresión, separadas por el operador OR (`|`), lo que significa
//   que se buscará cualquiera de estas palabras en el texto.
//
// - `i`: el flag indica que la búsqueda es insensible a mayúsculas y minúsculas

export const containsWords = (text: string, words: string[]): boolean => {
  const escapedWords = words.map((word) =>
    // La expresión ajusta los caracteres especiales para que se comporten como texto normal
    word.replace(/[-\\^$.*+?()[\]{}|]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedWords.join("|")})\\b`, "i");
  return regex.test(text);
};
