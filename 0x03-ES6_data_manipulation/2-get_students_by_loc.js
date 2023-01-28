export default function getStudentsByLocation(arr, city) {
  return arr.filter((student) => student.location === city);
}
