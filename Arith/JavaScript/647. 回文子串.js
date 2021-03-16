/** 
 * 2021/03/14
 *
 * 
给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。

具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。

 

示例 1：

输入："abc"
输出：3
解释：三个回文子串: "a", "b", "c"
示例 2：

输入："aaa"
输出：6
解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindromic-substrings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



 /**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if(s.length==0)return 0;

    let dp = Array.from(new Array(s.length), ()=>new Array(s.length).fill(false));
    let count = 0;
    for(var i = 0; i < s.length ; i++){
        dp[i][i] = true;
        count++;
    }

    for(var n = 1; n < s.length; n++){
        for(var i = 0; i < s.length; i++){
            let j = i + n;
            if(s[j] == s[i] && j - i == 1){
                dp[i][j] = true;
                count++;
            }else if(s[j] == s[i]){
                dp[i][j] = dp[i+1][j-1];
                if(dp[i][j])count++;
            }
        }
    }


    return count;
};