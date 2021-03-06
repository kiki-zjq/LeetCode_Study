/** 
 * 2021/02/01
 *
 *  
 * 
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var isPalindrome = function (s) {
    s = s.toUpperCase();
    let i = 0, j = s.length - 1;
  
    while (i < j) {
      if (!isValid(s[i])) {
        i++;
        continue;
      }
      if (!isValid(s[j])) {
        j--;
        continue;
      }
      if (s[i] != s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };
  
  var isValid = function (c) {
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9');
  };
  