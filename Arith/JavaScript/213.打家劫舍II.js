/** 
 * 2021/01/24
 *
 *  
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。

 

示例 1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2：

输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：

输入：nums = [0]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 将这个问题转化为子问题 即 不偷第一个房子的最值 或 不偷最后一个房子的最值 取最值

    if(nums.length<=1) return nums[nums.length-1]||0;

    var helper = function(num){
        if(num.length<=1)return num[num.length-1]||0;
        var dp0 = 0, dp1 = num[0];
        var dp = 0;
        for(var i=1; i <num.length;++i){
            dp = Math.max(dp0+num[i], dp1);
            [dp0,dp1] = [dp1, dp];
        }
        return dp;
    }



    return Math.max(helper(nums.slice(1)),helper(nums.slice(0,nums.length-1)))
};