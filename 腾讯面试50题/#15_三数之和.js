/*
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
*/

/*
 *思路：用快排类似的二分思路，固定一个数，然后选定两个指针，如果他们值加起来小于0的话，那么肯定左指针的数太小了，所以左指针右移。
 *然后还进行了很多优化，比如如果三个数同号是肯定不可以的。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    const length = nums.length;
    nums.sort((a,b) => a-b )
    if(nums[0]<= 0 && nums[length-1]>=0)
    {
        for(let i = 0; i < length - 2; i++)
        {
            if(nums[i] > 0) break;
            let first = i + 1;
            let last = length - 1;
            while(first < last)
            {
                if (nums[i] * nums[last] > 0) break;
                let sum = nums[i] + nums[first] + nums[last]
                if(sum === 0)
                    res.push([nums[i],nums[first],nums[last]])
                if(sum <= 0)
                {
                    while (nums[first] === nums[++first]) {}
                }else{
                    while(nums[last] === nums[--last]){}
                }
            }
            while (nums[i] === nums[i+1]) {i++}
        }
    }
    return res;
};