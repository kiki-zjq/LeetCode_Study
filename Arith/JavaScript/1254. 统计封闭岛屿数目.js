/** 
 * 2021/03/11
 *
 * 
有一个二维矩阵 grid ，每个位置要么是陆地（记号为 0 ）要么是水域（记号为 1 ）。

我们从一块陆地出发，每次可以往上下左右 4 个方向相邻区域走，能走到的所有陆地区域，我们将其称为一座「岛屿」。

如果一座岛屿 完全 由水域包围，即陆地边缘上下左右所有相邻区域都是水域，那么我们将其称为 「封闭岛屿」。

请返回封闭岛屿的数目。

 

示例 1：



输入：grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
输出：2
解释：
灰色区域的岛屿是封闭岛屿，因为这座岛屿完全被水域包围（即被 1 区域包围）。
示例 2：



输入：grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
输出：1
示例 3：

输入：grid = [[1,1,1,1,1,1,1],
             [1,0,0,0,0,0,1],
             [1,0,1,1,1,0,1],
             [1,0,1,0,1,0,1],
             [1,0,1,1,1,0,1],
             [1,0,0,0,0,0,1],
             [1,1,1,1,1,1,1]]
输出：2

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/number-of-closed-islands
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */







 /**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    // 位于边界处的0肯定都无法变成封闭岛屿
    // 第一步. 把边界处的0全部变成2
    // 第二步. 计算岛屿数量

    let m = grid.length;
    let n = grid[0].length;


    var helper = function(i, j){
        if(i<0 || i>=m || j<0 || j>=n || grid[i][j]!=0)return;
        grid[i][j]=2;

        helper(i+1,j);
        helper(i-1,j);
        helper(i,j+1);
        helper(i,j-1);
    }


    for(var i=0;i<m;i++){
            if(grid[i][0]==0 ){
                helper(i,0);
            }
            if(grid[i][n-1]==0){
                helper(i,n-1);
            }
    }

    for(var j=0;j<n;j++){
            if(grid[0][j]==0 ){
                helper(0,j);
            }
            if(grid[m-1][j]==0){
                helper(m-1,j);
            }
    }


    let res = 0;

    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(grid[i][j]==0){
                helper(i,j);
                res++;
            }
        }
    }
    

    return res;

};