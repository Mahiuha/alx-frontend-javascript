export default function getListStudentIds() {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((x) => x.id);
}
