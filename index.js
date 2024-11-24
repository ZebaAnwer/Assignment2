function factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  } 
  //factorial 
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  } 
  //remove duplicate 
  let arr = [1, 2, 3, 2, 1, 4, 5, 4];
  let uniqueArr = removeDuplicates(arr);
  console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
  //sumArrays 
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  } 
  //sortArrays 
