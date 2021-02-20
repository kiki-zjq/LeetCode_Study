/** 
 * 2021/02/20
 *
 *  
 给定一个非空且只包含非负数的整数数组 nums，数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

 

示例 1：

输入：[1, 2, 2, 3, 1]
输出：2
解释：
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
示例 2：

输入：[1,2,2,3,1,4,2]
输出：6
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/degree-of-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



 /**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
    let map = new Map(), count = 0, minLen = nums.length;
    //遍历nums，map的key为数字，value为出现次数
    for (let i of nums) {
        map.set(i, map.has(i) ? map.get(i) + 1 : 1);
        count = Math.max(count, map.get(i));
    }
    let arr = [];
    //遍历map，arr存放出现次数最多的数字
    for(let [key, value] of map) {
        if(value == count) {
            arr.push(key);
        }
    }
    //遍历arr， 最短连续子数组的长度 = 某数字的最后出现索引 - 某数字的最初出现索引 + 1
    for (let i of arr) {
        minLen = Math.min(minLen, nums.lastIndexOf(i) - nums.indexOf(i) + 1);
    }
    return minLen;
};

