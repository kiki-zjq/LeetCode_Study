/** 
 * 2020/12/08
 *
 *  

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

注意数组中可能存在重复的元素。

示例 1：

输入: [1,3,5]
输出: 1
示例 2：

输入: [2,2,2,0,1]
输出: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



 /**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0, end = nums.length - 1;
    let mid = 0;

    while(start<end){
        mid = Math.floor((start+end)/2);


            if(nums[mid]>nums[end]){
                start = mid+1;
            }else if(nums[mid]<nums[end]){
                end = mid;
            }else {
                end --
            }

        

    }
    return nums[start]  
};