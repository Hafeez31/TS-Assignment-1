// function to merge objects
const mergeObjects = (...args: {}[]): {} => {
  // resultant merged object
  let res: {} = {};

  // iterating over every object
  for (let i = 0; i < args.length; i++) {
    // for each property of an object
    for (let prop in args[i]) {
      // if property value is not null and not undefined
      if (args[i][prop] !== null && args[i][prop] !== undefined)
        // add it to the resultant object
        res[prop] = args[i][prop];
    }
  }
  return res;
};

// objects
const obj1 = { a: 1, b: "hello" };
const obj2 = { b: "world", c: true };
const obj3 = { c: null, d: [1, 2, 3] };
const obj4 = { c: false, d: [1, 2, 3], e: undefined };

// function call with arbitrary number of objects as arguments
const mergedObject = mergeObjects(obj1, obj2, obj3, obj4);
console.log(mergedObject);
