/** 
 * 2020/09/02
 *
 *  

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

示例 1:

输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true
示例 2:

输入: nums = [2,5,6,0,0,1,2], target = 3
输出: false

 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    //去重
    nums = [...new Set(nums)]
    if(nums.length===1) return nums[0]===target
    let l=0,r=nums.length-1
    while(l<=r){
        const mid = l + ((r-l)>>>1)
        if(nums[mid]===target) return true
        if(nums[mid]>=nums[0]){
            if(target>=nums[0]&&target<=nums[mid]){
                r=mid-1
            }else{
                l=mid+1
            }
        }else{
            if(target>=nums[mid] && target <=nums[nums.length-1]){
                l=mid+1
            }else{
                r=mid-1
            }
        }
    }

    return false
};
