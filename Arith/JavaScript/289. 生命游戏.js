/** 
 * 2021/04/10
 *
 *  
 * 
根据 百度百科 ，生命游戏，简称为生命，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/game-of-life
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let pos = [[-1,-1], [0,-1], [1,-1], [-1,0], [1,0], [-1,1], [0,1], [1,1]];
    
    let m = board.length;
    let n = board[0].length;
    let count = 0;
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            count = 0;
            pos.forEach((p)=>{
                if(i+p[0]>=0 && i+p[0]<m && j+p[1]>=0 && j+p[1]<n){
                    if(board[i+p[0]][j+p[1]]==1 || board[i+p[0]][j+p[1]]==3)count++;
                }
            })

            if(count==3 && board[i][j]==0){
                board[i][j]=2 // 2 代表死而复生
            }
            if((count<2 || count>3) && board[i][j]==1){
                board[i][j]=3 // 3 代表生变死
            }

        }
    }

    for(var i=0; i<m ;i++){
        for(var j=0; j<n ;j++){
            if(board[i][j]==2)board[i][j]=1;
            if(board[i][j]==3)board[i][j]=0;
        }
    }

    return board;
};