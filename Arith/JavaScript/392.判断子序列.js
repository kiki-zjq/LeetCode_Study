/** 
 * 2020/12/10
 *
 *  

 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

进阶：

如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

致谢：

特别感谢 @pbrother 添加此问题并且创建所有测试用例。

 

示例 1：

输入：s = "abc", t = "ahbgdc"
输出：true
示例 2：

输入：s = "axc", t = "ahbgdc"
输出：false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/is-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


 */

 

 /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


 // 双指针法
var isSubsequence = function(s, t) {
    let i=0,j=0;//设置两个指针

    while(i<s.length&&j<t.length){
        if(t[j]==s[i]){
            i++;
            j++;
        }else{
            j++
        }
    }

    if(i==s.length)return true;
    if(j==t.length)return false;

};


// 递归法
const isSubsequence = (subStr, str) => {
    if (subStr.length == 0) return true;
    let i = 0;
    while (i < str.length) {
      if (subStr[0] == str[i]) {
        const rest_sub = subStr.substring(1);     // 剩余subStr
        const rest_str = str.substring(i + 1);    // 剩余str
        return isSubsequence(rest_sub, rest_str); // 递归判断
      }
      i++;
    }
    return false;
  };
  