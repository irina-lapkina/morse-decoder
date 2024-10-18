const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const chunksArr = [];

  for (let i = 0; i < expr.length; i += 10) {
    const chunk = expr.slice(i, i + 10);
    chunksArr.push(chunk);
  }

  const charsArr = chunksArr.map(bitesToKey);

  function bitesToKey(str) {
    if (str === "**********") {
      return " ";
    }
    const bites = String(+str);

    const keysArr = [];

    for (let i = 0; i < bites.length; i += 2) {
      const chunk = bites.slice(i, i + 2);
      keysArr.push(chunk);
    }
    const key = keysArr.map((el) => (el === "10" ? "." : "-")).join("");
    return MORSE_TABLE[key];
  }
  return charsArr.join("");
}

module.exports = {
  decode,
};
