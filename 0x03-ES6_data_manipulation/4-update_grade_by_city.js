export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.city === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
