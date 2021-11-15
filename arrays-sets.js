const myUnorderedArr = [1, 5, 564, 8, 36, 4, 25, 36, 91, 26, 454, 1245, 25, 6, 84, 526, 561556, 225, 56, 56];
const myOrderedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
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

const arrayHasDuplicate = (arr) => {
    let existingNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (existingNumbers[arr[i]] === 1) return true;
        existingNumbers[arr[i]] = 1;
    }
    return false;
};

const findGreatestNumberSlow = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let isGreatest = true;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                isGreatest = false
            };
        };
        if (isGreatest) return arr[i]
    };
};

const findGreatestNumberQuick = (arr) => {
    let greatestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greatestNum) greatestNum = arr[i];
    };
    return greatestNum;
}

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length -1; i++) {
        let indexOfLowestNumber = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfLowestNumber]) indexOfLowestNumber = j;
            if (indexOfLowestNumber !== i) {
                let temp = arr[i];
                arr[i] = arr[indexOfLowestNumber]
                arr[indexOfLowestNumber] = temp
            };
        };
    };
    return arr;
};

const insertionSort = (arr) => {
    for (let i = 1; i< arr.length; i++){
        let temp = arr[i];
        let position = i - 1;

        while(position >= 0){
            if (arr[position] > temp){
                arr[position +1] = arr[position];
                position = position - 1;
            } else {
                break;
            }
        }
        arr[position + 1] = temp;
    }
    return arr;
};

console.log(insertionSort(myUnorderedArr));