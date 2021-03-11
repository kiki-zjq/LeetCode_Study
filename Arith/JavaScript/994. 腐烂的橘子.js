/** 
 * 2021/03/11
 *
 * 
在给定的网格中，每个单元格可以有以下三个值之一：

值 0 代表空单元格；
值 1 代表新鲜橘子；
值 2 代表腐烂的橘子。
每分钟，任何与腐烂的橘子（在 4 个正方向上）相邻的新鲜橘子都会腐烂。

返回直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1。

 

示例 1：



输入：[[2,1,1],[1,1,0],[0,1,1]]
输出：4
示例 2：

输入：[[2,1,1],[0,1,1],[1,0,1]]
输出：-1
解释：左下角的橘子（第 2 行， 第 0 列）永远不会腐烂，因为腐烂只会发生在 4 个正向上。
示例 3：

输入：[[0,2]]
输出：0
解释：因为 0 分钟时已经没有新鲜橘子了，所以答案就是 0 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotting-oranges
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */




 /**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let q = [];
    let time = 0;
    
    let fresh = 0;//初始的新鲜橘子
    let m = grid.length;
    let n = grid[0].length;

    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(grid[i][j]==2){
                q.push([i,j]);
            }
            if(grid[i][j]==1){
                fresh++;
            }
        }
    }

    if(fresh==0)return time;

    while(q.length){
        let len = q.length;
        time++;
        for(var t=0;t<len;t++){
            let source = q.shift();
            let [i,j] = [source[0],source[1]];
            ([ [-1,0],[+1,0],[0,-1],[0,+1] ]).forEach(([x,y])=>{
                if(i+x >= 0 && i+x <m && j+y>=0 && j+y<n && 
                    grid[i+x][j+y]==1){
                        grid[i+x][j+y] = 2;
                        fresh--;
                        q.push([i+x,j+y]);
                    }
            })

        }

    }

    return fresh==0?time-1:-1;
};