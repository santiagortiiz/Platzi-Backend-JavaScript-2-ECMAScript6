function findArrayDepth(arr) {
  let depth = 0
  let flatArray
  let depthFound = false

  while (!depthFound) {
    flatArray = arr.flat(depth)

    // Check if any item in the list is an Array type object
    if ( flatArray.every(item => !Array.isArray(item))) depthFound = true
    depth += 1
  }

  return { flatArray, depth }
}
let array = [ 1, [2], [2, [3, [4]]] ]
console.log(findArrayDepth(array))

let array = [1, 2, 3];
// Flat the result of the map
console.log(array.flatMap(value => [value, value * 2]));
console.log(array.map(value => [value, value * 2]));

let hello = '        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello World       ';
console.log(hello);
console.log(hello.trimEnd());

try {

} catch {
  error
}


let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);

/* Pruebas con fechas */
let now = new Date()
console.log(now.toISOString())
let treinta_dias = 1000 * 60 * 60 * 24 * 30
let future = new Date(now.getTime() + treinta_dias)
console.log(future.toISOString())

if (now.getTime() > future.getTime()) {
  console.log("SI")
} else { 
  console.log("NO")
}