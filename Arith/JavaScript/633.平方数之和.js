/** 
 * 2020/12/07
 *
 *  
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

 

示例 1：

输入：c = 5
输出：true
解释：1 * 1 + 2 * 2 = 5
示例 2：

输入：c = 3
输出：false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-of-square-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    var i = 0, j = Math.floor(Math.sqrt(c)), s = 0
    while(i <= j){
        s = i * i + j * j
        if(s == c) return true
        s > c ? j-- : i++
    }
    return false
};
