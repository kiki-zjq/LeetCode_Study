/** 
 * 2020/08/29
 *
 *  

给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

示例 1:

输入: "aacecaaa"
输出: "aaacecaaa"


 */


 /**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let n = s.length;
    let revs = s.split('').reverse().join('');
    for (let i = 0; i < n; i++) {
        if (s.substr(0, n - i) == revs.substr(i))
            return revs.substr(0, i) + s;
    }
    return "";
};
