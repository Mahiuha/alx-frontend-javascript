export default function createIteratorObject(report) {
  // Define the iterator
  let index = 0;
  return {
    next() {
      if (index < report.employees.length) {
        const value = report.employees[index];
        index += 1;
        return { value, done: false };
      }
      return { done: true };
    },
  };
}
