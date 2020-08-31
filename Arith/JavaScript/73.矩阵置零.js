/** 
 * 2020/09/01
 *
 *  
给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用原地算法。

示例 1:

输入: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2:

输入: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/set-matrix-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 注意在js中，0和-0不相等
var setZeroes = function(matrix) {
    for(let i = 0;i < matrix.length;i++){
        for(let j = 0;j < matrix[i].length;j++){
            if(Object.is(matrix[i][j],0)){
                for(let k = 0;k < matrix.length;k++){
                    if(k !== i && Object.is(matrix[k][j],0)) continue;
                    else matrix[k][j] = -0
                }
                for(let k = 0;k < matrix[i].length;k++){
                    if(k !== j && Object.is(matrix[i][k],0)) continue;
                    else matrix[i][k] = -0
                }                
            }
        }
    }
    return matrix;
};

