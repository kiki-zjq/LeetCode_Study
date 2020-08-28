/** 
 * 2020/08/29
 *
 *  
给定一个 n × n 的二维矩阵表示一个图像。

将图像顺时针旋转 90 度。

说明：

你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]



 */



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 时间复杂度O(n^2) 空间复杂度O(1)
  
    // 做法： 先沿着对角线翻转，然后沿着水平线翻转
    const n = matrix.length;
    function swap(arr, [i, j], [m, n]) {
      const temp = arr[i][j];
      arr[i][j] = arr[m][n];
      arr[m][n] = temp;
    }
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i; j++) {
        swap(matrix, [i, j], [n - j - 1, n - i - 1]);
      }
    }
  
    for (let i = 0; i < n / 2; i++) {
      for (let j = 0; j < n; j++) {
        swap(matrix, [i, j], [n - i - 1, j]);
      }
    }
  };
  