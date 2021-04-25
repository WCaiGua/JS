## 删除排序数组中的重复项
## 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。

## 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。




/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
        if(!nums.length) return 0;
        let slow = 0;
        let fast = 0;
        while(fast !== nums.length){
            if(nums[slow] !== nums[fast]){
                slow++;
                nums[slow] = nums[fast];
            }
            fast++;
        }
        return ++slow;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numLength = nums.length
    if(!numLength) return 0
    if(numLength === 1) return 1
    let slowP = 0;
    for(let fastP = 0;fastP<numLength;fastP++){
        if(nums[fastP] !== nums[slowP]){
            slowP++;
            nums[slowP] = nums[fastP]
        }
    }
    return ++slowP
};
