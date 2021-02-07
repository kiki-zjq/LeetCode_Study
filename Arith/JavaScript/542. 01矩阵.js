/** 
 * 2021/02/04
 *
 *  
 * 
给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

 

示例 1：

输入：
[[0,0,0],
 [0,1,0],
 [0,0,0]]

输出：
[[0,0,0],
 [0,1,0],
 [0,0,0]]
示例 2：

输入：
[[0,0,0],
 [0,1,0],
 [1,1,1]]

输出：
[[0,0,0],
 [0,1,0],
 [1,2,1]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/01-matrix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/



/** 
一般来说，因为这道题涉及到四个方向上的最近搜索，所以很多人的第一反应可能会是广度
优先搜索。但是对于一个大小 O(mn) 的二维数组，对每个位置进行四向搜索，最坏情况的时间复
杂度（即全是 1）会达到恐怖的 O(m2n2)。一种办法是使用一个 dp 数组做 memoization，使得广
度优先搜索不会重复遍历相同位置；另一种更简单的方法是，我们从左上到右下进行一次动态搜
索，再从右下到左上进行一次动态搜索。两次动态搜索即可完成四个方向上的查找。
*/


/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    // 动态规划
    let n = matrix.length,
        m = matrix[0] ? matrix[0].length : 0
    if (m === 0 || n === 0) return 0
    let ans = new Array(n);
    for(let i = 0; i < n; i++) ans[i] = new Array(m).fill(n+m);
    

    // 从左上往右下遍历
    for(var i=0;i<n;++i){
        for(var j=0;j<m;++j){
            if(matrix[i][j]==0){
                ans[i][j]=0;
            }else{
                if(j>0){
                    ans[i][j]=Math.min(ans[i][j-1]+1,ans[i][j]);
                }
                if(i>0){
                    ans[i][j]=Math.min(ans[i-1][j]+1,ans[i][j]);
                }
            }

        }

    }

    // 从右下往左上遍历
    for(var i=n-1;i>=0;--i){
        for(var j=m-1;j>=0;--j){
            if(matrix[i][j]!==0){
               
                if(j<m-1){
                    ans[i][j]=Math.min(ans[i][j+1]+1,ans[i][j]);
                }
                if(i<n-1){
                    ans[i][j]=Math.min(ans[i+1][j]+1,ans[i][j]);
                }
            }

        }

    }

    return ans
};