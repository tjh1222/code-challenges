/*

For this exercise you will create a global flatten method.
The method takes in any number of arguments and flattens
them into a single array. If any of the arguments passed
in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the
other arguments. Any nested arrays, no matter how deep, should
be flattened into the single array result.

The following are examples of how this function would be used and what
the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']


Algorithm:
1. create an empty array
2. capture arguments into an array
3. for Each argument:
  -> check to see if the argument is an array
    -> yes: a)recursively call the flatten function passing in the elements in argument as an argument
            b) concatenate the return of that recursive call with the array on line 1
    -> no: push to array from step 1
4. return the array on step 1



*/

function flatten(...args) {
  let flattenedArray = [];
  for (let idx = 0; idx < args.length; idx += 1) {
    let current = args[idx];
    if (Array.isArray(current)) {
      flattenedArray.push(...flatten(...current));
    } else {
      flattenedArray.push(current);
    }
  }
  return flattenedArray;
}


console.log(flatten(1, [2, 3], 4, 5, [6, [7]])) // returns [1, 2, 3, 4, 5, 6, 7]
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])); // returns ['a', 'b', 2, 3, null, 4, 'c']