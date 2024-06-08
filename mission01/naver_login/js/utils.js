function getValueAtObject(obj, key) {
  if (!(key in obj)) {
    throw new Error("Error !");
  }
  return obj[key];
}

// const person = {
//   name: "Alice",
//   age: 25,
//   city: "Wonderland",
// };

// console.log(getValueAtObject(person, "name")); // 'Alice'
// console.log(getValueAtObject(person, "age")); // 25
// console.log(getValueAtObject(person, "city")); // 'Wonderland'
// console.log(getValueAtObject(person, "country")); // Error !

function getNumberAtArray(arr, index) {
  if (!Array.isArray(arr)) {
    throw new Error("Error!");
  }
  if (typeof index !== "number") {
    throw new Error("Error!");
  }
  if (index < 0 || index >= arr.length) {
    throw new Error("Error!");
  }
  return arr[index];
}

// const numbers = [10, 20, 30, 40, 50];

// console.log(getNumberAtArray(numbers, 2)); // 30
// console.log(getNumberAtArray(numbers, 4)); // 50
// console.log(getNumberAtArray(numbers, 5)); // Error!
// console.log(getNumberAtArray(numbers, -1)); // Error!
