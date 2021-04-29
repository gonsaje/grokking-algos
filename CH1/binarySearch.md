# Binary Search
### Only works when list is in sorted order

```js
const binarySearch = (array, target) => {
    //pointers start at the extremities of our list
    let lo = 0,
        hi = array.length - 1;

    while (lo <= hi) { // while our pointers haven't narrowed down to one item
        let mid = Math.floor((lo + hi) / 2); // mid index based on where our pointers lie
  
        if (array[mid] === target) return mid; // in the case that we found our item
        if (array[mid] > target) hi = mid - 1; // if guess is too high, reset the new hi to be less than current mid
        else lo = mid + 1; // if guess was too low than reset new lo to be higher than current mid 
    }

    return null; // or -1 depending on what the desired output is
};

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 8));
console.log(binarySearch([1,2,3,4,5,6,7,8,9], 3));
```

### Suppose you have a sorted list of 128 names, and you're searching trhough it using binary search.
### What's the maximum number of steps it would take?

128 => 64 => 32 => 16 => 8 => 4 => 2 => 1 
7 steps

### Suppose you double the size of the list. What's the max num of steps now? 

8 steps because it's only one extra step to get from double 128 to 128

ex.
256 => 128 => 64 => 32 => 16 => 8 => 4 => 2 => 1 // 8 steps

### Binary Search runs on O(log n)