// 01. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k++] = nums[i];
        }
    }

    return k;
};

let nums = [1, 1, 2];
console.log(removeDuplicates(nums)); // 2


// 02. Binary Search

var search = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4