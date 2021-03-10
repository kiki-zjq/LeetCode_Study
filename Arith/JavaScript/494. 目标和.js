/** 
 * 2021/03/10
 *
 * 
给定一个非负整数数组，a1, a2, ..., an, 和一个目标数，S。现在你有两个符号 + 和 -。对于数组中的任意一个整数，你都可以从 + 或 -中选择一个符号添加在前面。

返回可以使最终数组和为目标数 S 的所有添加符号的方法数。

 

示例：

输入：nums: [1, 1, 1, 1, 1], S: 3
输出：5
解释：

-1+1+1+1+1 = 3
+1-1+1+1+1 = 3
+1+1-1+1+1 = 3
+1+1+1-1+1 = 3
+1+1+1+1-1 = 3

一共有5种方法让最终目标和为3。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/target-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



// 1. 回溯法----- 但是非常非常的慢！


/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {

    let res = 0;


    var recursion = function(sum, index){
        
        if(index == nums.length){
            res = sum == S? res+1 : res;
        }else{
            recursion(sum + nums[index], index+1);
            recursion(sum - nums[index], index+1);
        }

    }

    recursion(0,0);
    return res;

};







// 2. 动态规划方法
// 相当于变成一个背包问题，其中dp[i]表示填满i这么大的背包有多少种方法

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    if (nums == null || nums.length == 0) return 0;
    var sums = 0;
    nums.forEach(num => sums += num);
    if (sums < S || (S + sums) % 2 == 1) return 0;
    // 如果S和sums奇偶不一样，也一定为0

    var p = (S + sums)/2;
    var dp = new Array(p + 1).fill(0);
    dp[0] = 1;
    nums.forEach(num => {
        for (var i = p; i >= num; i--) {
            dp[i] += dp[i - num];
        }
    })
    return dp[p];
};
