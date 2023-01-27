export default function cleanSet(s, startString) {
  let result = '';
  for (const item of s) {
    if (item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1);
}
