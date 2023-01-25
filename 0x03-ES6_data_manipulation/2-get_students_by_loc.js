function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const result = students.filter((item) => item.location === city);

  return result;
}

export default getStudentsByLocation;

