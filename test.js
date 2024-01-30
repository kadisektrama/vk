function sendMessage(message) {
  let page = 1;
  let result = [];
  let letter = "";

  if (message.length <= 140) {
    return [message];
  }

  let messageWords = message.split(" ");

  while (messageWords.length) {
    let word = messageWords.shift(); //queue

    if (word.length + letter.length + 3 + `${page}`.length <= 140) {
      // sum of total characters in letter + page
      letter += word + " ";
    } else {
      page++;
      result.push(letter);
      letter = word + " ";
    }
  }

  result.push(letter);
  return result.map((letter, index) => `${letter}${index + 1}/${page}`);
}
