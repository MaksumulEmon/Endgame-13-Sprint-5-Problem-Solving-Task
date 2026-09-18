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

let nums = [1, 1, 2];
console.log(removeDuplicates(nums)); // 2



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

var invertTree = function(root) {
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

var productExceptSelf = function(nums) {
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