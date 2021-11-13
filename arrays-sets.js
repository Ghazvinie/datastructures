const myUnorderedArr = [1, 5, 564, 8, 36, 4, 25, 36, 91, 26, 454, 1245, 25, 6, 84, 526, 561556, 225, 56];
const myOrderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const mySet = new Set([1, 4, 6, 8, 9, 15, 18, 20, 25, 29, 38, 42, 57, 59, 66, 72, 77, 81, 86, 99, 110]);

const linearSearch = (arr, num) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    };
    return -1;
};

const binarySearch = (arr, num) => {

    let lowerBound = 0;
    let upperBound = arr.length - 1;

    while (lowerBound <= upperBound) {
        let midPoint = Math.floor((upperBound + lowerBound) / 2);

        if (arr[midPoint] === num) {
            return midPoint;
        } else if (num < arr[midPoint]) {
            upperBound = midPoint - 1;
        } else if (num > arr[midPoint]) {
            lowerBound = midPoint + 1
        };
    };
    return -1;
};

const binarySearchCompact = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === num) return mid;
        num < arr[mid] ? end = mid - 1 : start = mid + 1;
    }
    return -1;
};

const bubbleSort = (arr) => {
    let rightmostIdx = arr.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const valueBelow = arr[i];
                const valueAbove = arr[i + 1];
                arr[i] = valueAbove;
                arr[i + 1] = valueBelow;
                sorted = false;
            };
            rightmostIdx -= 1;
        };
    };
    return arr;
};

const bubbleSortCompact = (arr) => {
    let length = arr.length - 1;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                sorted = false;
            };
            length -= 1;
        };
    };
    return arr;
};


    console.log(bubbleSortCompact(myUnorderedArr));