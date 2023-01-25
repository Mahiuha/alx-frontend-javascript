export default function getStudentIdsSum(students) {
  const reduce = (acumumulate, currentValue) => acumumulate + currentValue.id;

  const sum = students.reduce(reduce, 0);
  return sum;
}
