/** 
 * 2021/03/05
 *
 *  
峰值元素是指其值大于左右相邻值的元素。

给你一个输入数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

 

示例 1：

输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。
示例 2：

输入：nums = [1,2,1,3,5,6,4]
输出：1 或 5 
解释：你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-peak-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // 二分查找的边界该怎么判断, left<right 还是 left<=right?
    // left = mid 还是 left = mid + 1?
    // return left 还是 return 别的?
    var left = 0, right = nums.length-1, mid = 0;
    while(left<right){
        mid = Math.floor((left+right)/2);
        // 如果mid处于升序序列，峰值在其右侧
        // 如果mid处于降序序列，峰值在其左侧
        if(nums[mid] < nums[mid+1] ){
            left = mid+1;
        }else{
            right = mid;
        }

    }
    return left;
};