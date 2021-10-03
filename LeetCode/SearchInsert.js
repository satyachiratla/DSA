var searchInsert = function(nums, target) {
    
    let start = 0;
    let end = nums.length;
    let middle;
    
    while (nums[middle] !== target && start <= end) {
        middle = Math.floor((start + end) / 2);
        if (target === nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            end = middle - 1;
        } else { //target > nums[middle]
            start = middle + 1;
        }
    }
    return start;
};

console.log(searchInsert([1,2,3,5,6,9,10],5));
                    //      s  m       e 