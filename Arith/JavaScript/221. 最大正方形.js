/** 
 * 2021/02/04
 *
 *  
 * 
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

 

示例 1：


输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
输出：4
示例 2：


输入：matrix = [["0","1"],["1","0"]]
输出：1
示例 3：

输入：matrix = [["0"]]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximal-square
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {character[][]} matrix
 * @return {number}
 */


/**
 *   1  1  1  1       1  1  1  1
 *   1  1  1  1  ==>  1  2  2  2
 *   1  1  1  1       1  2  3  3
 *   1  1  1  1       1  2  3  4
 * 
 * 
 */
var maximalSquare = function(matrix) {
    // 动态规划 从左上往右下遍历
    let n = matrix.length,
        m = matrix[0] ? matrix[0].length : 0
    if (m === 0 || n === 0) return 0
    let ans = new Array(n);
    for(let i = 0; i < n; i++) ans[i] = new Array(m).fill(0);

    var res = 0;

    for(var i=0;i<n;i++){
        for(var j=0;j<m;j++){
            
            if(matrix[i][j]==="1"){
                
                if(i==0||j==0)ans[i][j]=1;//边界上的只能为1
                if(i>0&&j>0){
                   ans[i][j] = Math.min(ans[i-1][j-1], Math.min(ans[i][j-1], ans[i-1][j])) + 1
                }
            }
            res = Math.max(res,ans[i][j])
        }
    }

    //console.log(ans)
    return res*res;

};