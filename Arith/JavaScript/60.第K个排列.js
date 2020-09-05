/** 
 * 2020/09/05
 *
 *  
给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1,  n!]。
示例 1:

输入: n = 3, k = 3
输出: "213"
示例 2:

输入: n = 4, k = 9
输出: "2314"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutation-sequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


 /**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let res = []
    function helper(level, n, str) {
        if (level >= n) {
            res.push(str)
            return
        }

        for (let i=1; i<=n; i++) {
            // 剪枝 - 去重
            if (str.indexOf(i+'') == -1 && res.length <= k) {
                helper(level+1, n, str+i)
            }
        }
    }

    helper(0, n, '')

    return res[k-1]
};
