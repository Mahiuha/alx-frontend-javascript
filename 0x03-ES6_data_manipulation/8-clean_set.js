export default function cleanSet(set, startString) {
  const filteredSet = Array.from(set).filter((val) => val.startsWith(startString));
  const cleanedValues = filteredSet.map((val) => val.substring(startString.length));
  return cleanedValues.join('-');
}
