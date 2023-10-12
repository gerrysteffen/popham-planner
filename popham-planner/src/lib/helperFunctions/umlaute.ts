const umlautMap = {
  Ä: 'A',
  Ö: 'O',
  Ü: 'U'
};

export function adjustForUmlaute(word: string) {
  let firstLetter = word.slice(0, 1).toUpperCase();
  if (/[ÄÖÜ]/.test(firstLetter)) {
    firstLetter = umlautMap[firstLetter as 'Ä' | 'Ö' | 'Ü'];
  }
  return firstLetter + word.slice(1);
}
