/** 
 * 2020/08/28
 *
 *  
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 */


 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length < 2) return nums;
    let len = nums.length;
    let i = len - 2;
    let j = len - 1;
    let k = len - 1;
    // 寻找从数组末尾开始的第一个升序的i,j
    while (i >= 0 && nums[i] >= nums[j]) {
      i--;
      j--;
    }
    // 说明数组是降序排列的
    if (i < 0) return nums.sort((a, b) => a - b);
    // 从数组末尾寻找第一个比nums[i]大的值
    // 注意边界和相等问题
    while (k > i && nums[i] >= nums[k]) {
      k--;
    }
    // 交换i，k处的值
    swap(nums, i, k);
    // j后的数据现在肯定是降序排列,转化为升序排列
    // 收尾依次交换位置即可
    while (len > j) {
      swap(nums, j, len - 1);
      len--;
      j++;
    }
  
    function swap (nums, i, k) {
      let temp = nums[i];
      nums[i] = nums[k];
      nums[k] = temp;
    }
  
    return nums;
  };