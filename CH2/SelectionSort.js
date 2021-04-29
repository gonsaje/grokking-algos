function selectionSort(arr) {
    let sortedArr = [];

    while (arr.length > 0) {
        let min = arr[0];
        let minIndex = 0;

        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            if (current < min) {
                min = current;
                minIndex = i;
            }
        }

        sortedArr.push(min);
        arr.splice(minIndex, 1);
    }

    return sortedArr;
}

function selectSort(arr) {
    let sortArr = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let smallest = findSmallest(arr);
        sortArr = sortArr.concat(arr.splice(smallest, 1));
    }

    return sortArr;
}

function findSmallest(arr) {
    let small = arr[0];
    let small_index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < small) {
            small = arr[i];
            small_index = i;
        }
    }

    return small_index;
}



console.log(selectionSort([9,3,2,5,1,4,8])); // => [1,2,3,4,5,8,9]
console.log(selectSort([9,3,2,5,1,4,8])); // => [1,2,3,4,5,8,9]
