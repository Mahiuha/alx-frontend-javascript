export default function createEmployeesObject(departmentName, employees) {
  const employee = { [departmentName]: employees };
  return employee;
}
