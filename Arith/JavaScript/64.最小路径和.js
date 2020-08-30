/** 
 * 2020/08/31
 *
 *  
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-path-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let m = grid.length,
      n = grid[0] ? grid[0].length : 0
    if (m === 0 || n === 0) return 0
  
    let dp = new Array(n).fill(0)
  
    dp[0] = grid[0][0]
  
    // 补齐首列路径和
    for (let i = 1; i < n; i++) {
      dp[i] = dp[i - 1] + grid[0][i]
    }
  
    for (let i = 1; i < m; i++) {
      // 开始每列循环时限初始化本列起点路径和，到达本列前的路径和
      dp[0] = dp[0] + grid[i][0]
      for (let j = 1; j < n; j++) {
        dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j]
      }
    }
    return dp[n - 1]
  }
  