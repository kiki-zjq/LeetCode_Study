/** 
 * 2020/09/02
 *
 *  
给定一个二维网格和一个单词，找出该单词是否存在于网格中。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

给定 word = "ABCCED", 返回 true
给定 word = "SEE", 返回 true
给定 word = "ABCB", 返回 false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/word-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


 */

 /**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    if (board.length === 0) return false;
    if (word.length === 0) return true;
    const row = board.length;
    const col = board[0].length;
    for(let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if(find(i,j,0)) return true;
        }
    }
    return false;
    function find(i, j, cur) {
        if(i >= row || i < 0 || j >=col || j < 0) return false;
        const now = board[i][j];
        if(now !== word[cur]) return false;
        if(cur === word.length - 1) return true; // word长度为1
        board[i][j] = null;
        const res = find(i+1,j,cur+1) ||
                    find(i-1,j,cur+1) ||
                    find(i,j+1,cur+1) ||
                    find(i,j-1,cur+1);
        board[i][j] = now;
        return res;
    }
};
