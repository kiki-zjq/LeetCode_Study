/** 
 * 2020/12/11
 *
 *  


给你一个字符串 s ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

注意：该题与 1081 https://leetcode-cn.com/problems/smallest-subsequence-of-distinct-characters 相同

 

示例 1：

输入：s = "bcabc"
输出："abc"
示例 2：

输入：s = "cbacdcbc"
输出："acdb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicate-letters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


 */

 /**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    
    if (!s || !(s.length>0))return ''
    const stack = [s[0]]
    
    for (let i = 1; i < s.length; i += 1) {
        if (stack.indexOf(s[i]) === -1) {
            if ((stack[stack.length - 1] > s[i]) && s.slice(i).indexOf(stack[stack.length - 1]) !== -1) {
                stack.pop()
                if (stack.length > 0) {
                    i --
                    continue
                }
            }
            stack.push(s[i])
        }
    }

    return stack.join('')

};