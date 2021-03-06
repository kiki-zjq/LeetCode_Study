/** 
 * 2020/08/31
 *
 *  
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径

输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
示例 2:

输入: m = 7, n = 3
输出: 28

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-paths
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let matrix = []
    for(let i=0;i<n;i++){
        matrix.push([])
        matrix[i][m-1]=1
    }
    for(let i=0;i<m;i++){
        matrix[n-1][i]=1
    }
    
    for(let i=m-2;i>=0;i--){
        for(let j=n-2;j>=0;j--){
            matrix[j][i] = matrix[j+1][i]+matrix[j][i+1]
        }
    }

    return matrix[0][0]
};