// Two Sum
const twoSum = function (nums, target) {
    let numsArr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                numsArr.push(i)
                numsArr.push(j)
            };
        };
    };
    return numsArr;
};

const twoSum2 = function (nums, target) {
    let numsArr = [];
    for (let i = 0; i < nums.length; i++) {
        const index = nums.indexOf(target - nums[i])
        if (index != -1 && index != i) {
            numsArr.push(i)
            numsArr.push(index)
            return numsArr;
        };
    };
};
const twoSum3 = function (nums, target) {
    if (nums.length === 2) return [0, 1];
    let map = {} // create a map
    for (let i = 0; i < nums.length; i++) {
        let targetMinusNum = target - nums[i]; // get the number for target - nums[i]
        let doesMapHaveIt = map[targetMinusNum] // will look at map and see if it has a prop of targetMinusNums
        if (doesMapHaveIt != undefined) return [doesMapHaveIt, i] // map does have targetMinusNum as a property and return the value of i
        map[nums[i]] = i //map[targetMinusNum === undefined] therefore add the targetMinusNum as a property and the value as i
    }

};

// Contains duplicate
const containsDuplicate = function (nums) {
    let existingNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (existingNums[nums[i]] != undefined) return true
        existingNums[nums[i]] = i
    }
    return false
};

// Valid Anagram
const isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const sMap = {};
    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            sMap[s[i]] = 1;
        } else {
            sMap[s[i]]++;
        };
    };
    for (let i = 0; i < t.length; i++) {
        if (!sMap[t[i]]) return false;
        sMap[t[i]]--;
    };
    return true;
};
//  Valid Parentheses
var isValid = function (s) {
    let stack = [];
    const dictionary = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '(': stack.push(dictionary[s[i]]);
                break;
            case '{': stack.push(dictionary[s[i]]);
                break;
            case '[': stack.push(dictionary[s[i]]);
                break;
            default:
                if (s[i] != stack.pop()) {
                    return false;
                };
        };
    };
    return stack.length === 0;
};
