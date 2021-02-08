/** 
 * 2021/02/09
 *
 *  
在一个 8x8 的棋盘上，放置着若干「黑皇后」和一个「白国王」。

「黑皇后」在棋盘上的位置分布用整数坐标数组 queens 表示，「白国王」的坐标用数组 king 表示。

「黑皇后」的行棋规定是：横、直、斜都可以走，步数不受限制，但是，不能越子行棋。

请你返回可以直接攻击到「白国王」的所有「黑皇后」的坐标（任意顺序）。

 

示例 1：



输入：queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
输出：[[0,1],[1,0],[3,3]]
解释： 
[0,1] 的皇后可以攻击到国王，因为他们在同一行上。 
[1,0] 的皇后可以攻击到国王，因为他们在同一列上。 
[3,3] 的皇后可以攻击到国王，因为他们在同一条对角线上。 
[0,4] 的皇后无法攻击到国王，因为她被位于 [0,1] 的皇后挡住了。 
[4,0] 的皇后无法攻击到国王，因为她被位于 [1,0] 的皇后挡住了。 
[2,4] 的皇后无法攻击到国王，因为她和国王不在同一行/列/对角线上

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/queens-that-can-attack-the-king
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


 /**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    var board = [], res = [];
    // 初始化
    init(board, queens, king);

    search(board, res, king[0], king[1]);
    return res;
};

var init = (board, queens, king) => {
    //初始化 8*8 矩阵
    for (var i = 0; i < 8; i ++) {
        board[i] = new Array(8).fill('.');
    }
    // 初始化国王
    board[king[0]][king[1]] = 'K';
    // 初始化皇后
    for (var i = 0; i < queens.length; i ++) board[queens[i][0]][queens[i][1]] = 'Q';
};

var search = (board, res, x, y) => {
    var isOk = (x, y) => {
        if (board[x][y] === 'Q') {
            res.push([x, y]);
            return true;
        }
        return false;
    }

    var i, j;
    // 右方向
    i = x, j = y + 1;
    while (j < 8) {
        if (isOk(i, j)) break;
        ++ j;
    }
    //左方向
    i = x, j = y - 1;
    while (j >= 0) {
        if (isOk(i, j)) break;
        -- j;
    }
    // 上方向
    i = x - 1, j = y;
    while (i >= 0) {
        if (isOk(i, j)) break;
        -- i;
    }
    // 下方向
    i = x + 1, j = y;
    while (i < 8) {
        if (isOk(i, j)) break;
        ++ i;
    }
    // 左上斜向
    i = x - 1, j = y - 1;
    while (i >= 0 && j >= 0) {
        if (isOk(i, j)) break;
        -- i, -- j;
    }
    // 右下斜向
    i = x + 1, j = y + 1;
    while (i < 8 && j < 8) {
        if (isOk(i, j)) break;
        ++ i, ++ j;
    }
    // 右上斜向
    i = x - 1, j = y + 1;
    while (i >= 0 && j < 8) {
        if (isOk(i, j)) break;
        -- i, ++ j;
    }
    // 左下斜向
    i = x + 1, j = y - 1;
    while (i < 8 && j >= 0) {
        if (isOk(i, j)) break;
        ++ i, -- j;
    }
}
