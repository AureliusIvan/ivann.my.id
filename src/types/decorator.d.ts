function LogClass(target: Function) {
  console.log(`Class ${target.name} was defined.`);
}

export { LogClass }