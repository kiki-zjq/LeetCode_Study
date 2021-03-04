/** 
 * 2021/03/04
 *
 *  
给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空 子字符串：

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
提示：a + b 意味着字符串 a 和 b 连接。

 

示例 1：


输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
输出：true
示例 2：

输入：s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
输出：false

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/interleaving-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {

    if(s3.length!=s1.length+s2.length)return false;
    if(s1=='')return s3==s2;
    if(s2=='')return s3==s1;
    // dp[i][j]表示 s1的前i个元素+s2的前j个元素 是否等于 s3的i+j个元素
    var dp = Array.from(new Array(s1.length+1),()=>new Array(s2.length+1))
    
    
    dp[0][0]=false;
    for(var i=1;i<=s1.length;i++){
        dp[i][0] = s1.slice(0,i) == s3.slice(0,i)
    }
    for(var j=1;j<=s2.length;j++){
        dp[0][j] = s2.slice(0,j) == s3.slice(0,j)
    }

    for(var i=1;i<=s1.length;i++){
        for(var j=1;j<=s2.length;j++){
            dp[i][j] = s2[j-1]==s3[i+j-1] && dp[i][j-1]
                    || s1[i-1]==s3[i+j-1] && dp[i-1][j]
        }
    }


    return dp[s1.length][s2.length]
};
 