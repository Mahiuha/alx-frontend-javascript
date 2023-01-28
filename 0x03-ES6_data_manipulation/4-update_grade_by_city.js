export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.map((student) => {
    if (student.location === city) {
      const grade = newGrades.find((grade) => grade.id === student.id);
      if (grade) {
        student.grade = grade.grade;
      }
    }
    return student;
  });
}
