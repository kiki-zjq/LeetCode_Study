/** 
 * 2021/01/30
 *
 *  
 * 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/move-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/



// 顺序遍历数组，遇0删0，后面元素索引都-1，需i = i - 1重新扫描当前位
// 记录初始数组长度，删0时实时数组长度 - 1
// 初始数组长度 - 实时数组长度 = 删0的个数
// 当i大于实时数组长度，补0直到初始数组长度

var moveZeroes = function(nums) {
    for (var i = 0, len = nums.length; i < len; i++)
        if (nums[i] === 0) nums.splice(i, 1), i--
        else if (i >= nums.length) nums[i] = 0
};

