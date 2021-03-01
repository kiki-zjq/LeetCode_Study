/** 
 * 2021/3/01
 *
 *  
给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。

 

示例 1:
输入:

"bbbab"
输出:

4
一个可能的最长回文子序列为 "bbbb"。

示例 2:
输入:

"cbbd"
输出:

2
一个可能的最长回文子序列为 "bb"。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


 /**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    // 动态规划 在子串s[i]--s[j]中 结果是dp[i][j]
    // 如果s[i]==s[j] ==> dp[i][j]=2+dp[i+1][j-1]
    // 如果s[i]!=s[j] ==> dp[i][j]=Math.max(dp[i][j-1],dp[i+1][j])
    // 初始情况dp[i][j]=1(if i==j) dp[i][j]=0(if i>j)
    var dp =Array.from(new Array(s.length),()=>new Array(s.length).fill(0))
    for(var i=0;i<s.length;i++){
        dp[i][i]=1
    }

    // 考虑遍历方向的时候，考虑到我们最终需要dp[0][s.length-1],因此从下往上遍历
    for(var i=s.length-1;i>=0;i--){
        for(var j=i+1;j<s.length;j++){
            if(s[i]==s[j])dp[i][j] = dp[i+1][j-1]+2
            else{
                dp[i][j]=Math.max(dp[i][j-1],dp[i+1][j])
            } 
        }
    }

    return dp[0][s.length-1]
};