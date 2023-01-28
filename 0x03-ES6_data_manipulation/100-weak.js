export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;

  called += 1;

  weakMap.set(endpoint, called);

  if (called >= 5) {
    throw Error('Endpoint load is high');
  }

  return called;
}
