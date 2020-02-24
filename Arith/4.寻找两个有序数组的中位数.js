/** 
 * 2020/02/24
 *
 *  给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

    请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

    你可以假设 nums1 和 nums2 不会同时为空。

    示例 1:

    nums1 = [1, 3]
    nums2 = [2]

    则中位数是 2.0
    示例 2:

    nums1 = [1, 2]
    nums2 = [3, 4]

    则中位数是 (2 + 3)/2 = 2.5

 
 */


 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var num = [...nums1,...nums2].sort((a,b)=>{
        return a-b;
    })
    if(num.length%2==1){
        return num[Math.floor(num.length/2)];
    }else{
        return (num[num.length/2]+num[num.length/2 -1])/2;
    }
};