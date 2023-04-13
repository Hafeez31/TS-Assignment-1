{
    // Using Set
    // function to return unique objects based on given property
    var uniqueObjects = function (items, prop) {
        // Set to store the unique values of given property
        var uniqueValues = new Set();
        return items.filter(function (item) {
            var value = item[prop];
            // check if particular value is present in uniqueValues set
            if (uniqueValues.has(value)) {
                return false;
            }
            else {
                // if not present in uniqueValues set => add it.
                uniqueValues.add(value);
                return true;
            }
        });
    };
    // Objects Array
    var items = [
        { id: 1, name: "John", age: 20 },
        { id: 2, name: "Jane", age: 20 },
        { id: 3, name: "John", age: 21 },
        { id: 4, name: "Bob", age: 20 },
        { id: 5, name: "Jane", age: 22 },
    ];
    // resultant object array
    var result = uniqueObjects(items, "age");
    console.log(result);
}
