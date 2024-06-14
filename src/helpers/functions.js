export const moveFirstCharToEnd = (str) => {
  if (str.length > 1) {
    return str.substring(1) + str.charAt(0);
  }
  return str;
};
