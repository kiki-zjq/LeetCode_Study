/** 
 * 2020/02/24
 *
 *  给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

    示例 1：

    输入: "babad"
    输出: "bab"
    注意: "aba" 也是一个有效答案。

    示例 2：

    输入: "cbbd"
    输出: "bb"
 */


//辅助函数：中心扩散找回文串函数
function expandAroundCenter(s, l, r) {     //这里传入l和r是为了处理回文串长度奇数和偶数的情况
    //防止索引越界，若字符左右一样则再向两边扩散
    while (l >= 0 && r < s.length && s[l] == s[r]) { 
        //向两边扩散
        l--;
        r++;
    }
    //返回以s[l]和s[r]为中心的回文串
    return s.substring(l + 1, r);
}

//主函数
var longestPalindrome = function(s) {
     var max="";  //最长回文子串初始化
     for(var i=0;i<s.length;i++){
         var s1 = expandAroundCenter(s,i,i);   //以s[i]为中心的回文子串
         var s2=expandAroundCenter(s,i,i+1);   //以s[i]和s[i+1]为中心的回文串
         //更新最长回文子串
         max=max.length>s1.length?max:s1;     
         max=max.length>s2.length?max:s2;
     }
     return max;
};

// 一个动态规划的题目，思路是已某一个字符（或两个）为起始点，每次都向左右扩张一个，比较新扩张的字符是否相等
