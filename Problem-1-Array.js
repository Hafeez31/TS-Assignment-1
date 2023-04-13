{
    // Using Array
    // function to check if particular value is present in uniqueValues array
    var isPresent_1 = function (uniqueValues, value) {
        for (var i = 0; i < uniqueValues.length; i++) {
            if (uniqueValues[i] == value)
                return true;
        }
        // unique.push(value);
        return false;
    };
    // function to return unique objects based on given property
    var uniqueObjects = function (items, prop) {
        // Array to store the unique values of given property
        var uniqueValues = [];
        return items.filter(function (item) {
            var value = item[prop];
            // check if particular value is present in uniqueValues array
            if (isPresent_1(uniqueValues, value)) {
                return false;
            }
            else {
                // if not present in uniqueValues array => push it.
                uniqueValues.push(value);
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
