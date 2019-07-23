/*
格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gray-code
*/

/*
 *这个看了一下别人的题解，因为没啥思路，主要有公式法 return [i ^ i >> 1  for i in range(1 << n)]
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let res = [];
    for(let i = 0; i < 1<<n; ++i)
    {
        res.push(i^i>>1);
    }
    return res;
};