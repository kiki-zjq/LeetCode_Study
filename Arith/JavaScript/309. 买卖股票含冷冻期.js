/** 
 * 2021/3/01
 *
 *  
给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
示例:

输入: [1,2,3,0,2]
输出: 3 
解释: 对应的交易状态为: [买入, 卖出, 冷冻期, 买入, 卖出]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var n = prices.length;
    var dp_i_0 = 0, dp_i_1 = -Infinity;
    var dp_pre = 0;
    for(var i=0;i<n;i++){
        var temp = dp_i_0;
        var dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        var dp_i_1 = Math.max(dp_i_1, dp_pre - prices[i])
        var dp_pre = temp;
    }
    return dp_i_0;
};