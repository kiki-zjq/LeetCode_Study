/** 
 * 2021/03/11
 *
 * 
给你一个大小为 m x n 的整数矩阵 isWater ，它代表了一个由 陆地 和 水域 单元格组成的地图。

如果 isWater[i][j] == 0 ，格子 (i, j) 是一个 陆地 格子。
如果 isWater[i][j] == 1 ，格子 (i, j) 是一个 水域 格子。
你需要按照如下规则给每个单元格安排高度：

每个格子的高度都必须是非负的。
如果一个格子是是 水域 ，那么它的高度必须为 0 。
任意相邻的格子高度差 至多 为 1 。当两个格子在正东、南、西、北方向上相互紧挨着，就称它们为相邻的格子。（也就是说它们有一条公共边）
找到一种安排高度的方案，使得矩阵中的最高高度值 最大 。

请你返回一个大小为 m x n 的整数矩阵 height ，其中 height[i][j] 是格子 (i, j) 的高度。如果有多种解法，请返回 任意一个 。

 

示例 1：



输入：isWater = [[0,1],[0,0]]
输出：[[1,0],[2,1]]
解释：上图展示了给各个格子安排的高度。
蓝色格子是水域格，绿色格子是陆地格。
示例 2：



输入：isWater = [[0,0,1],[1,0,0],[0,0,0]]
输出：[[1,1,0],[0,1,1],[1,2,2]]
解释：所有安排方案中，最高可行高度为 2 。
任意安排方案中，只要最高高度为 2 且符合上述规则的，都为可行方案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/map-of-highest-peak
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


 /**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    let m = isWater.length;
    let n = isWater[0].length;

    let res = Array.from(new Array(m),()=>new Array(n).fill(-1));
    let visited =  Array.from(new Array(m),()=>new Array(n).fill(false));
    let q = [];
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(isWater[i][j]==1){
                res[i][j] = 0;
                visited[i][j] = true;
                q.push([i,j]);
               
            }
        }
    };

    let height = 0;//染色成height

    while(q.length){
        height++;
        let len = q.length;
        for(var t=0;t<len;t++){
            let source = q.shift();
            let [i,j] = [source[0],source[1]];
            ([ [-1,0],[+1,0],[0,-1],[0,+1] ]).forEach(([x,y])=>{
                if( i+x >= 0 && i+x <m && j+y>=0 && j+y<n && visited[i+x][j+y]==false &&
                    res[i+x][j+y]==-1){
                    res[i+x][j+y] = height;
                    visited[i+x][j+y] = true;
                    q.push([i+x,j+y]);
                }
            })
        }
    }

    return res;
};


