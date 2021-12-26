const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}
let objetivo = {
  a: 1,
  b: 2
}
objetivo = { ...objetivo, ...data }
console.log()
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
  frontend: 'Oscar',
  backend: 'ISabel',
  design: 'Ana',
}

data.datoNuevo = 'dato añadido'

const values = Object.values(data);
console.log(values)
console.log(values.length)

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'))
console.log('food'.padEnd(12, '  -----'))

const obj = {
  name: 'oscar',
}

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFunction();