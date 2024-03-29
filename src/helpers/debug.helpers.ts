const isDebug = process.env.NODE_ENV === 'development';


const checkPerformance = (fn: Function, ...args: any[]) => {
  console.time(fn.name);
  const result = fn(...args);
  console.timeEnd(fn.name);
  return result;
}



export { checkPerformance }