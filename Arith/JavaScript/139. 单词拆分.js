/** 
 * 2021/02/20
 *
 *  

给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // 动态规划, 对于dp[i], dp[i] = s[j:i+1] && dp[j-1]
    var dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for(var i=1;i<=s.length;i++){
        for(var j=0;j<i;j++){
            // 将单词分为s[0:j]和s[j:i]两个部分
            if( wordDict.indexOf(s.slice(j,i))!=-1 && dp[j] ){
                dp[i]=true;
                break;
            }
        }
    }

    return dp[s.length];
};