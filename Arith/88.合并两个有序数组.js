/** 
 * 2020/02/21
 *
 *  给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

    说明:

    初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
    你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

    示例:

    输入:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    输出: [1,2,2,3,5,6]

 
 */

 // 其实感觉和21.合并两个有序链表很类似，但是考虑到是数组可以有更多直观的方法。下面的
 // 是将nums1和nums2合并为一个数组，然后排序。

 /**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,nums1.length - m)
    nums2.splice(n,nums2.length - n)    
    Object.assign(nums1,[...nums1,...nums2].sort((a,b) => a - b))
};



//解法二 效率更高

var merge = function(nums1, m, nums2, n) {
    let contact = n+m
    while(m>0 && n>0){
        nums1[--contact] = nums1[m-1]>nums2[n-1]?nums1[--m]:nums2[--n]
    }
    if(n>0){
      nums1.splice(0,n,...nums2.slice(0,n));
    }
 };