var mergeObjects = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // resultant merged object
    var res = {};
    // iterating over every object
    for (var i = 0; i < args.length; i++) {
        // for each property of an object
        for (var prop in args[i]) {
            // if property value is not null and not undefined
            if (args[i][prop] !== null && args[i][prop] !== undefined)
                // add it to the resultant object
                res[prop] = args[i][prop];
        }
    }
    return res;
};
// objects
var obj1 = { a: 1, b: "hello" };
var obj2 = { b: "world", c: true };
var obj3 = { c: null, d: [1, 2, 3] };
var obj4 = { c: false, d: [1, 2, 3], e: undefined };
// function call with arbitrary number of objects as arguments
var mergedObject = mergeObjects(obj1, obj2, obj3, obj4);
console.log(mergedObject);
