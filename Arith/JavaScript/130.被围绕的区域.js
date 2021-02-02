/** 
 * 2021/02/02
 *
 *  
 * 
给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。

找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

示例:

X X X X
X O O X
X X O X
X O X X
运行你的函数后，矩阵变为：

X X X X
X X X X
X X X X
X O X X
解释:

被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/surrounded-regions
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // dfs问题

    // 凡是与边界连接的O，最终都保持为O，其他的O则会变成X
    
    const m = board.length;


    if (m == 0) return;         // [] 情况的特判
    const n = board[0].length;
    
    
    const dfs = (i, j) => {
        if (i < 0 || i == m || j < 0 || j == n) return; // 越界了
        if (board[i][j] == 'O') { // 遇到O，染为NO      
        board[i][j] = 'NO';                    
        dfs(i + 1, j);          // 对四个方向的邻居进行dfs
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
        }
    };


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                if (board[i][j] == 'O') dfs(i, j); // 从最外层的O，开始DFS
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'NO') board[i][j] = 'O';     // 恢复为O
            else if (board[i][j] === 'O') board[i][j] = 'X'; // O变为X
        }
    }

};