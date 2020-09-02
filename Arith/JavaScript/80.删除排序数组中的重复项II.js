/** 
 * 2020/09/02
 *
 *  
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定 nums = [1,1,1,2,2,3],

函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,1,2,3,3],

函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。

你不需要考虑数组中超出新长度后面的元素。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



 // 方法一 正常写逻辑

 var removeDuplicates = function(nums) {

    for(let i=2;i<nums.length;i++){
        if(nums[i-2] === nums[i]){
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
};


// 方法二 双指针
var removeDuplicates = function(nums) {
    let count = 0
    let n = nums.length
    if(n < 3) return n
    let j = 1
    for(let i = 2;i < n;i++) {
        if(nums[i] != nums[j-1]) {
            j++
            nums[j] = nums[i]
        }
    }
    return j + 1
};
