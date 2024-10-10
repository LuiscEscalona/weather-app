export const containsWords = (text: string, words: string[]): boolean => {
  const escapedWords = words.map((word) =>
    word.replace(/[-\\^$.*+?()[\]{}|]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedWords.join("|")})\\b`, "i");
  return regex.test(text);
};
