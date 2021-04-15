/** 
 * 2021/04/12
 *
 *  
给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。

 

示例 1：


输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
输出：4 
解释：最长递增路径为 [1, 2, 6, 9]。
示例 2：


输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
输出：4 
解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
示例 3：

输入：matrix = [[1]]
输出：1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



 /**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let visited = Array.from(new Array(m),()=>new Array(n).fill(-1));

    let dfs = function(i,j, curr){
        if(i<0 || i>=m || j<0 || j>=n ||matrix[i][j]<=curr)return 0;

        if(visited[i][j]!=-1)return visited[i][j];

        let count = 1 + Math.max( dfs(i+1,j,matrix[i][j]),
                                  dfs(i-1,j,matrix[i][j]),
                                  dfs(i,j+1,matrix[i][j]),
                                  dfs(i,j-1,matrix[i][j]) )
        visited[i][j] = count;
        return count;
    }

    let res = 1;
    for(var i=0; i<m; i++){
        for(var j=0; j<n ;j++){
            res = Math.max(dfs(i,j,-Infinity), res);
        }
    }

    return res;
};