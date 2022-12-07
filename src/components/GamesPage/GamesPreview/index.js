export * from "./GamesPreview";
export * from "./GamesPreview";

export const cardStr = (str) => {
  let text = str;
  if (str.split(" ").length > 13) text = `${str.split(" ", 14).join(" ")}...`;
  if (text.length > 110) text = `${str.slice(0, 114)}...`;
  return text;
};
