/** 
 * 2020/09/13
 *
 *  
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。

 

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = (triangle) => {
    const height = triangle.length;
    const width = triangle[0].length;
    // 初始化dp数组
    const dp = new Array(height);
    for (let i = 0; i < height; i++) {
      dp[i] = new Array(width);
    }
    for (let i = height - 1; i >= 0; i--) {
      for (let j = triangle[i].length - 1; j >= 0; j--) {
        if (i == height - 1) {  
          // base case
          dp[i][j] = triangle[i][j];  
        } else {
          // 状态转移方程
          dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
        }
      }
    }
    return dp[0][0];
  };
  