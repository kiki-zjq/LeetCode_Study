/** 
 * 2021/04/04
 *
 *  
给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的结果。比方说 rev(123) = 321 ， rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是 好的 ：

0 <= i < j < nums.length
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
请你返回好下标对的数目。由于结果可能会很大，请将结果对 109 + 7 取余 后返回。

 

示例 1：

输入：nums = [42,11,1,97]
输出：2
解释：两个坐标对为：
 - (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121 。
 - (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12 。
示例 2：

输入：nums = [13,10,35,24,76]
输出：4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-nice-pairs-in-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 
 /**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    let count = 0;
    
    let map = new Map();
    
    for(let num of nums){
        let revDiff = num - rev(num);
        if(map.has(revDiff)){
            map.set(revDiff, map.get(revDiff)+1);
        }else{
            map.set(revDiff, 1);
        }
    }
    for(let val of map.values()){
        count += val*(val-1)/2;        
    }
    

    return count % (Math.pow(10,9)+7)
};

var rev = function(num){
    return num.toString().split('').reverse().join('')
}