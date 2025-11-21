//The remover
function charRemove(char, text) {
  if (typeof char !== "string" || typeof text !== "string") {
    console.error("wrong datatype");
    return;
  }

  const escapedChar = char.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(escapedChar, "g");
  const result = text.replace(regex, "");
  return result;
}