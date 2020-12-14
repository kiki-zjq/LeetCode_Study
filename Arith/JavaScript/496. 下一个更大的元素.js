/** 
 * 2020/12/14
 *
 *  
给定两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。如果不存在，对应位置输出 -1 。

 

示例 1:

输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
输出: [-1,3,-1]
解释:
    对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
    对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
    对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
示例 2:

输入: nums1 = [2,4], nums2 = [1,2,3,4].
输出: [3,-1]
解释:
    对于 num1 中的数字 2 ，第二个数组中的下一个较大数字是 3 。
    对于 num1 中的数字 4 ，第二个数组中没有下一个更大的数字，因此输出 -1 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/next-greater-element-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    //整体思路：
     //1.维护一个单调递减的栈，如果遇到比栈顶大的元素就是第一个比自己大的了
     //2.那么用key表示当前的数，nums[i]表示比key大的第一个数
     //3.枚举nums1找存在的key里的value值即可
      let map = new Map()
      let res = []
      let m = nums2.length
      let stack = []
      for(let i = 0; i < m; i++){
        //栈顶元素存在，并且当前的元素大于栈顶  
        while(stack.length && nums2[i] > stack[stack.length - 1]){
          map.set(stack.pop(), nums2[i]) 
        }  
        stack.push(nums2[i])
      }
      //栈内还有元素，说明后面没有比自己小的了
      while(stack.length){
        map.set(stack.pop(), -1)
      }
      nums1.forEach(item => {
        res.push(map.get(item))
      })
      return res
    };
