/*
给定一个整数数组，判断是否存在重复元素。

如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/contains-duplicate/
*/

/*
 *思路：用哈希表查找是否有相同元素
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map();
    for(let i = 0; i < nums.length; ++i)
    {
        if(map.has(nums[i]))    return true;
        map.set(nums[i],i);
    }
    return false   
};