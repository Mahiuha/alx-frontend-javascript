import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createReportObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
console.log(report.allEmployees);

console.log(report.getNumberOfDepartments(report.allEmployees));
