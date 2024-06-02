export const expensiveTask = () => {
  console.log('expensiveTask');

  let result = 0;
  for (let i = 0; i < 10000000; i ++) {
    result += Math.sqrt(i);
  }

  return result;
}