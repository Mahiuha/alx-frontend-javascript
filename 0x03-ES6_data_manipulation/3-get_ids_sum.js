export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, student) => acc + student.id, 0);
}
