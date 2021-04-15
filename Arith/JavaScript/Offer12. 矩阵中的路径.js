/** 
 * 2021/04/12
 *
 *  
 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。



 

示例 1：

输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：

输入：board = [["a","b"],["c","d"]], word = "abcd"
输出：false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    let len = word.length;
    if(len==0)return true;

    let flag = 0;

    let dfs = function(i,j,index){
        if(i<0 || i>=m || j<0 || j>=n || board[i][j]!=word[index])return false;

        if(index == len-1 && board[i][j] == word[index]){
            return true;
        }

        let temp = board[i][j]
        board[i][j] = '-';

        let res=dfs(i,j+1,index+1)||
                dfs(i,j-1,index+1)||
                dfs(i+1,j,index+1)||
                dfs(i-1,j,index+1);

        board[i][j] = temp;
        return res;
    }

    for(var i=0; i<m; i++){
        for(var j=0; j<n ;j++){
            if(board[i][j]==word[0])
                if(dfs(i,j,0))return true;
        }
    }

    return false;
};