/** 
 * 2021/03/22
 *
 * 
返回所有长度为 n 且满足其每两个连续位上的数字之间的差的绝对值为 k 的 非负整数 。

请注意，除了 数字 0 本身之外，答案中的每个数字都 不能 有前导零。例如，01 有一个前导零，所以是无效的；但 0 是有效的。

你可以按 任何顺序 返回答案。

 

示例 1：

输入：n = 3, k = 7
输出：[181,292,707,818,929]
解释：注意，070 不是一个有效的数字，因为它有前导零。
示例 2：

输入：n = 2, k = 1
输出：[10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
示例 3：

输入：n = 2, k = 0
输出：[11,22,33,44,55,66,77,88,99]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/numbers-with-same-consecutive-differences
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */




 /**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let res = [];
    
    let dfs = function(path,i){
        if(path.length == n){
            res.push(path);
            return;
        }

        if(i+k<=9){
            let num = i + k;
            dfs(path+num, num);
        }

        if(i-k>=0 && k!=0){
            let num = i - k;
            dfs(path+num, num);
        }

    }


    for(var i = 1; i <= 9 ; i++){
        dfs(i+'',i);
    }



    return res;
};