{
  // Using Set

  // function to return unique objects based on given property
  const uniqueObjects = (
    items: { id: number; name: string; age: number }[],
    prop: string
  ): { id: number; name: string; age: number }[] => {
    // Set to store the unique values of given property
    const uniqueValues = new Set();
    return items.filter((item) => {
      const value: any = item[prop];

      // check if particular value is present in uniqueValues set

      if (uniqueValues.has(value)) {
        return false;
      } else {
        // if not present in uniqueValues set => add it.
        uniqueValues.add(value);
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
