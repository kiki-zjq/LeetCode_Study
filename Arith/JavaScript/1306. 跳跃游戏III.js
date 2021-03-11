/** 
 * 2021/03/11
 *
 * 
这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。

请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。

注意，不管是什么情况下，你都无法跳到数组之外。

 

示例 1：

输入：arr = [4,2,3,0,3,1,2], start = 5
输出：true
解释：
到达值为 0 的下标 3 有以下可能方案： 
下标 5 -> 下标 4 -> 下标 1 -> 下标 3 
下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3 
示例 2：

输入：arr = [4,2,3,0,3,1,2], start = 0
输出：true 
解释：
到达值为 0 的下标 3 有以下可能方案： 
下标 0 -> 下标 4 -> 下标 1 -> 下标 3
示例 3：

输入：arr = [3,0,2,1,2], start = 2
输出：false
解释：无法到达值为 0 的下标 1 处。 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */







 /**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    // BFS
    // 回溯法的结束条件是同一个点被访问了两次

    let len = arr.length;
    let isVisited = new Array(len).fill(false);
    let q = [start];

    isVisited[start] = true;

    while(q.length){
        let levelSize = q.length;
        for(var i=0;i<levelSize;i++){
            let node = q.shift();

            if( node + arr[node] < len){
                let index = node + arr[node];
                if(arr[index]==0)return true;
                if(isVisited[index]==false){
                    q.push(index);
                    isVisited[index] = true;
                }
            }

            if( node - arr[node] >= 0){
                let index = node - arr[node];
                if(arr[index]==0)return true;
                if(isVisited[index]==false){
                    q.push(index);
                    isVisited[index] = true;
                }
            }
        }
    }

    return false;
};