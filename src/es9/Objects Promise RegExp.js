const obj = {
  name: 'oscar',
  age: 32,
  country: 'MX',
  obj2: {
    a: 'a',
    b: 'b',
    obj3: {
      c: 'c',
      d: 'd'
    }
  }
};
// Destructuracion en cadena
const {
  // extrae obj2
  obj2,             
  // extrae obj3
  obj2: { obj3 }    
} = obj
console.log(obj2, obj3);

let { country, ...all } = obj;
console.log(all);

const obj = {
  name: 'Oscar',
  age: 32
}

const obj1 = {
  ...obj,
  country: 'MX'
}

console.log(obj1);


const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizo'))


  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2018-04-20');
  const year = match[1]
  const month = match[2]
  const day = match[3]

  console.log(year, month, day);