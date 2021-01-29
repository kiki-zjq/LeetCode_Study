/** 
 * 2021/01/30
 *
 *  
 * 
给定两个数组，编写一个函数来计算它们的交集。

 

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/





var intersection = function(nums1, nums2) {
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    var res = []
    for(var i=0;i<nums1.length;i++){
        if(nums2.indexOf(nums1[i])!=-1)res.push(nums1[i])
    }
    return res
};
