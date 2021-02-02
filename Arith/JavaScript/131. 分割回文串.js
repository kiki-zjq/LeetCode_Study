/** 
 * 2021/02/03
 *
 *  
 * 
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。

返回 s 所有可能的分割方案。

示例:

输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-partitioning
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


// ----- 方法一

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    if (s.length === 0) {
        return res;
    }
    findPalidrome(0, s, res, []);
    return res;
};


function findPalidrome(start, s, res, curArr) {
    if (start === s.length) {
        res.push(curArr);
        return;
    }

    for (let i = start; i < s.length; i++) {
        let subStr = s.slice(start, i + 1);
        if (subStr && isPal(subStr)) {
            findPalidrome(i + 1, s, res, [...curArr, subStr]);
        }
    }
}


function isPal(str) {
    let len = Math.floor(str.length / 2);
    if (len === 0) {
        return true;
    }
    let add = str.length % 2 === 0 ? 0 : 1;
    let subStr = str.slice(0, len);
    for (let i = 0; i < len; i++) {
        if (subStr[len - i - 1] !== str[len + add + i]) {
            return false;
        }
    }
    return true;
}


// -------方法二

var partition = function(s) {
    const n = s.length
    if (n === 0) return []
    const res = [], dp = Array.from({ length: n }, () => Array(n).fill(0))
    for(let i = n - 1; i >= 0; i--) { // 动规
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i+1][j-1])
        }
    }
    function bt(path, start) { // 回溯
        if (start === n) res.push([...path])
        for(let i = start; i < n; i++) {
            if (!dp[start][i]) continue
            path.push(s.substring(start, i + 1))
            bt(path, i + 1)
            path.pop()
        }
    }
    bt([], 0)
    return res
};

