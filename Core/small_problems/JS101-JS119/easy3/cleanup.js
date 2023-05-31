function cleanUp(string) {
  return string.replace(/[^a-zA-z]+/g,' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "