/** 
 * 2020/12/08
 *
 *  

给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。

示例 1:

输入: [1,1,2,3,3,4,4,8,8]
输出: 2
示例 2:

输入: [3,3,7,7,10,11,11]
输出: 10

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-element-in-a-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    // 本来遍历一遍就好了，但是要求O(logn)时间复杂度
    // 这是在明示二分法呀
    if(nums.length == 0)return null;

    let start = 0, end = nums.length-1, mid = 0;

    while(start<end){
        mid = Math.floor((start+end)/2);
       
        
        if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]){
            return nums[mid]
        }
        
        if(nums[mid]==nums[mid+1]){
            
            if (mid %2  == 0) {
                start = mid + 2
            } else {
                end = mid - 1
            }

        }else if(nums[mid] == nums[mid-1]){
            if (mid % 2 == 0) {
                end = mid - 2
            } else {
                start = mid + 1
            }

        }

    }

    return nums[start]
};