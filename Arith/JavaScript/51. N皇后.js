/** 
 * 2021/02/02
 *
 *  
 * 

 n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 

示例 1：


输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-queens
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/**
 * @param {number} n
 * @return {string[][]}
 */

// 回溯法

const solveNQueens = (n) => {
    const board = new Array(n);
    for (let i = 0; i < n; i++) {     // 棋盘的初始化
      board[i] = new Array(n).fill('.');
    }
    const res = [];
    const isValid = (row, col) => {  
      for (let i = 0; i < row; i++) { // 之前的行
        for (let j = 0; j < n; j++) { // 所有的列
          if (board[i][j] == 'Q' &&   // 发现了皇后，并且和自己同列/对角线
            (j == col || i + j === row + col || i - j === row - col)) {
            return false;             // 不是合法的选择
          }
        }
      }
      return true;
    };
    const helper = (row) => {   // 放置当前行的皇后
      if (row == n) {           // 递归的出口，超出了最后一行
        const stringsBoard = board.slice(); // 拷贝一份board
        for (let i = 0; i < n; i++) {
          stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
        }
        res.push(stringsBoard); // 推入res数组
        return;
      }
      for (let col = 0; col < n; col++) { // 枚举出所有选择
        if (isValid(row, col)) {          // 剪掉无效的选择
          board[row][col] = "Q";          // 作出选择，放置皇后
          helper(row + 1);                // 继续选择，往下递归
          board[row][col] = '.';          // 撤销当前选择
        }
      }
    };
    helper(0);  // 从第0行开始放置
    return res;
  };
  

