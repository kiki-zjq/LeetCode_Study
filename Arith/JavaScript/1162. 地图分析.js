/** 
 * 2021/03/12
 *
 * 
你现在手里有一份大小为 N x N 的 网格 grid，上面的每个 单元格 都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，请你找出一个海洋单元格，这个海洋单元格到离它最近的陆地单元格的距离是最大的。

我们这里说的距离是「曼哈顿距离」（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个单元格之间的距离是 |x0 - x1| + |y0 - y1| 。

如果网格上只有陆地或者海洋，请返回 -1。

 

示例 1：



输入：[[1,0,1],[0,0,0],[1,0,1]]
输出：2
解释： 
海洋单元格 (1, 1) 和所有陆地单元格之间的距离都达到最大，最大距离为 2。
示例 2：



输入：[[1,0,0],[0,0,0],[0,0,0]]
输出：4
解释： 
海洋单元格 (2, 2) 和所有陆地单元格之间的距离都达到最大，最大距离为 4。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/as-far-from-land-as-possible
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */




 /**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    // 以陆地作为源点，所有source向外扩张，最后碰到的那个海洋即为所需

    let lands = [];
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(grid[i][j]==1)lands.push([i,j]);
        }
    }

    if(lands.length==0||lands.length == m*n)return -1;
    let oceanNum = m*n - lands.length;
    let res = 0;

    while(lands.length && oceanNum>0){
        let len = lands.length;
        for(var t=0; t<len; t++){
            let land = lands.shift();
            let [i,j] = [land[0], land[1]];

            [[1,0], [-1,0], [0,1], [0,-1]].forEach(([x,y])=>{
                if( i+x >= 0 && i+x < m &&
                    j+y >= 0 && j+y < n &&
                    grid[i+x][j+y]==0){
                        grid[i+x][j+y] = 1;
                        lands.push([i+x,j+y]);
                        oceanNum--;
                    }
            })

        }
        res++;

    }

    return res;
};