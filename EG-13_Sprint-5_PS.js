// 01. Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k++] = nums[i];
        }
    }

    return k;
};

// let nums = [1, 1, 2];
// console.log(removeDuplicates(nums)); 



// 02. Binary Search

var search = function (nums, target) {
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



// 03. Search Insert Position

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return i;
    }
    return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5));





// 04. Maximum Depth of Binary Tree

var maxDepth = function (root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

const root = {
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
};

console.log(maxDepth(root));





// 05. Invert Binary Tree

var invertTree = function (root) {
    if (root === null) {
        return null;
    }

    // Swap left and right children
    [root.left, root.right] = [root.right, root.left];

    // Invert both subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
};



// 06. Product of Array Except Self

var productExceptSelf = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                product *= nums[j];
            }
        }

        result.push(product);
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));



// 07. Rotate Array

var rotate = function (nums, k) {
    k = k % nums.length;

    nums.reverse();

    // Reverse first k elements
    let left = 0;
    let right = k - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    // Reverse remaining elements
    left = k;
    right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};

const nums = [1, 2, 3, 4, 5, 6, 7];

rotate(nums, 3);

console.log(nums);





// 08. Min Stack

var MinStack = function () {
    this.stack = [];
    this.min = [];
};

MinStack.prototype.push = function (val) {
    this.stack.push(val);

    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
        this.min.push(val);
    }
};

MinStack.prototype.pop = function () {
    let val = this.stack.pop();

    if (val === this.min[this.min.length - 1]) {
        this.min.pop();
    }
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1];
};


// Test
let minStack = new MinStack();

minStack.push(-2);
minStack.push(0);
minStack.push(-3);

console.log(minStack.getMin());

minStack.pop();

console.log(minStack.getMin());








// 09. Continuous Subarray Sum

var checkSubarraySum = function (nums, k) {
    let sum = 0;
    let map = new Map();

    map.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        let remainder = sum % k;

        if (map.has(remainder)) {
            if (i - map.get(remainder) >= 2) {
                return true;
            }
        } else {
            map.set(remainder, i);
        }
    }

    return false;
};

console.log(checkSubarraySum([23, 2, 4, 6, 7], 6));




// 10. Daily Temperatures

var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let index = stack.pop();
            result[index] = i - index;
        }

        stack.push(i);
    }

    return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));