const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += count;
  weakMap.set(endpoint, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
