/** 
 * 2021/03/07
 *
 * 
你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。

示例：

输入：
[
  [0,2,1,0],
  [0,1,0,1],
  [1,1,0,1],
  [0,1,0,1]
]
输出： [1,2,4]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pond-sizes-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



 /**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
    var res = [];
    const rows = land.length;
    if (rows === 0) return res;
    const cols = land[0].length;


    for(var i=0; i<rows; i++){
        for(var j=0; j<cols; j++){
            if(land[i][j]==0){
                var river = [];
                helper(land, i, j, rows, cols, river);
                res.push(river.length);
                
            }
        }
    }

    return res.sort((a,b)=>a-b);
};

var helper = function(land, i, j, rows, cols, river){
    if(i<0 || j<0 || i > rows - 1 || j > cols - 1 || land[i][j]!=0)return;

    land[i][j] = 1;
    river.push(land[i][j]);

    helper(land, i + 1, j, rows, cols, river);
    helper(land, i, j + 1, rows, cols, river);
    helper(land, i - 1, j, rows, cols, river);
    helper(land, i, j - 1, rows, cols, river);

    helper(land, i + 1, j + 1, rows, cols, river);
    helper(land, i - 1, j + 1, rows, cols, river);
    helper(land, i - 1, j - 1, rows, cols, river);
    helper(land, i + 1, j - 1, rows, cols, river);

}