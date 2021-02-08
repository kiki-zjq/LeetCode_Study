/** 
 * 2021/02/07
 *
 *  
给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

你可以假设所有输入数组都可以得到满足题目要求的结果。

 

示例 1：

输入：nums = [1,5,1,1,6,4]
输出：[1,6,1,5,1,4]
解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。
示例 2：

输入：nums = [1,3,2,2,3,1]
输出：[2,3,1,3,1,2]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/wiggle-sort-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */




/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    nums.sort((a, b) => a - b);
    let arr = nums.slice();
    let j = nums.length - 1
    let k = 0
    for (let i = Math.ceil((nums.length / 2 - 1)); i >= 0; i--) {
        nums[k] = arr[i];
        k + 1 <= nums.length - 1 && (nums[k + 1] = arr[j]);
        k += 2;
        j -= 1
    }
};