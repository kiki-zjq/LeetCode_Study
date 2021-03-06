/** 
 * 2020/08/28
 *
 *  
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4



 */


// 主要是这个题目要求了时间复杂度是 O(logn),而indexof函数复杂度是O(n),考虑到题目要求，就会想到二分法

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 时间复杂度：O(logn)
    // 空间复杂度：O(1)
    // [6,7,8,1,2,3,4,5]
    let start = 0;
    let end = nums.length - 1;
  
    while (start <= end) {
      const mid = start + ((end - start) >> 1);
      if (nums[mid] === target) return mid;
  
      // [start, mid]有序
  
      // ️⚠️注意这里的等号
      if (nums[mid] >= nums[start]) {
        //target 在 [start, mid] 之间
  
        // 其实target不可能等于nums[mid]， 但是为了对称，我还是加上了等号
        if (target >= nums[start] && target <= nums[mid]) {
          end = mid - 1;
        } else {
          //target 不在 [start, mid] 之间
          start = mid + 1;
        }
      } else {
        // [mid, end]有序
  
        // target 在 [mid, end] 之间
        if (target >= nums[mid] && target <= nums[end]) {
          start = mid + 1;
        } else {
          // target 不在 [mid, end] 之间
          end = mid - 1;
        }
      }
    }
  
    return -1;
  };
  
