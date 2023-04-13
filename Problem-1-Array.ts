{
  // Using Array

  // function to check if particular value is present in uniqueValues array
  const isPresent = (uniqueValues: any[], value: any): boolean => {
    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] == value) return true;
    }
    // unique.push(value);
    return false;
  };

  // function to return unique objects based on given property
  const uniqueObjects = (
    items: { id: number; name: string; age: number }[],
    prop: string
  ): { id: number; name: string; age: number }[] => {
    // Array to store the unique values of given property
    const uniqueValues: any = [];
    return items.filter((item) => {
      const value: any = item[prop];

      // check if particular value is present in uniqueValues array
      if (isPresent(uniqueValues, value)) {
        return false;
      } else {
        // if not present in uniqueValues array => push it.
        uniqueValues.push(value);
        return true;
      }
    });
  };

  // Objects Array
  const items: { id: number; name: string; age: number }[] = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 20 },
    { id: 3, name: "John", age: 21 },
    { id: 4, name: "Bob", age: 20 },
    { id: 5, name: "Jane", age: 22 },
  ];

  // resultant object array
  let result = uniqueObjects(items, "age");
  console.log(result);
}
