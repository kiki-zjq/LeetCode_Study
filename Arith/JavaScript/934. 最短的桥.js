/** 
 * 2021/03/12
 *
 * 
在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）

现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛。

返回必须翻转的 0 的最小数目。（可以保证答案至少是 1 。）

 

示例 1：

输入：A = [[0,1],[1,0]]
输出：1
示例 2：

输入：A = [[0,1,0],[0,0,0],[0,0,1]]
输出：2
示例 3：

输入：A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
输出：1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shortest-bridge
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */





 /**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
    // 想象成腐烂的橘子问题，一个岛1不断往外面扩散，啥时候会触碰到岛2
    let m = A.length;
    let n = A[0].length;

    let flag = 0;
    let q = [];
    for(var i=0;i<m;i++){
        for(var j=0;j<n;j++){
            if(A[i][j]==1 && flag == 0){
                findIsland(i,j,A,q);
                flag = 1;
            }
        }
    }

    let res = 0;
    flag = 0;
    while(q.length && flag == 0){
        let len = q.length;
        for(var t=0;t<len;t++){
            let source = q.shift();
            let [i,j] = [source[0], source[1]];
            [[-1,0],[+1,0],[0,-1],[0,+1]].forEach(([x,y])=>{
                if(i+x >= 0 && i+x < m && j+y >= 0 && j+y < n
                    && A[i+x][j+y] == 1){
                        flag = 1;
                    }
                if(i+x >= 0 && i+x < m && j+y >= 0 && j+y < n
                    && A[i+x][j+y]==0){
                        A[i+x][j+y] = 2;
                        q.push([i+x, j+y]);
                }
            })
            
        }
        if(flag==0)res++;
    }

    return res;
};

var findIsland = function(i,j,A,q){
    let m = A.length;
    let n = A[0].length;

    if(i<0 || i>=m || j<0 || j>=n || A[i][j]!=1)return;
    A[i][j] = 2;
    q.push([i,j]);
    findIsland(i+1, j, A, q);
    findIsland(i-1, j, A, q);
    findIsland(i, j+1, A, q);
    findIsland(i, j-1, A, q);
}
