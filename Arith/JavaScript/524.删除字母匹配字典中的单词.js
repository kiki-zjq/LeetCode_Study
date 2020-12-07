/** 
 * 2020/12/07
 *
 *  
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:

输入: "aba"
输出: True
示例 2:

输入: "abca"
输出: True
解释: 你可以删除c字符。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
    if (!d) return '';
    d = d.sort();
    let longest = '';  //用来保存当前最长的单词
    for (let i = 0; i < d.length; i++) {
       let curr = d[i];
       let isDel = find(s, curr);
       if (isDel && curr.length > longest.length) longest = curr;
    };
    return longest;
};

function find(str, word) {
  let i = 0, j = 0;
  while (j < str.length) {
    if (word[i] === str[j]) {
      i++;
      j++;
    } else {
      j++;
    };
  };
  return i === word.length;
}


