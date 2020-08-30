/** 
 * 2020/08/31
 *
 *  
给定一个正整数 n，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。

示例:

输入: 3
输出:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]


 */

 // 思路完全仿照 #54.螺旋矩阵# 就好了

 /**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const num = []
    for(var i=1;i<=Math.pow(n,2);i++){
        num.push(i)
    }
    let matrix=[]
    for(var i=0;i<n;i++){
        matrix.push([])
    }
    let top = 0, bottom = n - 1, left = 0, right = n - 1
    while (top < bottom && left < right) {
      for (let i = left; i < right; i++) matrix[top][i] = num.shift()   // 上层
      for (let i = top; i < bottom; i++) matrix[i][right]= num.shift() // 右层
      for (let i = right; i > left; i--) matrix[bottom][i]= num.shift()// 下层
      for (let i = bottom; i > top; i--) matrix[i][left]= num.shift()  // 左层
      right--
      top++
      bottom--
      left++  // 四个边界同时收缩，进入内层
    }
    if (top === bottom) // 剩下一行，从左到右依次添加
      for (let i = left; i <= right; i++) matrix[top][i] = num.shift() 
    else if (left === right) // 剩下一列，从上到下依次添加
      for (let i = top; i <= bottom; i++) matrix[i][left] = num.shift() 

    return matrix
};

  