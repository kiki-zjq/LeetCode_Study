/** 
 * 2020/08/29
 *
 *  


给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

 

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2


 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let result = 1
    while (nums.includes(result)) {
        result++
    }
    return result
};
