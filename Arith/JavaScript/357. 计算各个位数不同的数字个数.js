/** 
 * 2021/02/06
 *
 *  
 * 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10n 。

示例:

输入: 2
输出: 91 
解释: 答案应为除去 11,22,33,44,55,66,77,88,99 外，在 [0,100) 区间内的所有数字。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/count-numbers-with-unique-digits
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {

    // 1 => 10
    // 2 => 10 + 9*9
    // 3 => 10 + 9*9 + 9*9*8

    dp = 10;
    if(n==0) return 1;
    if(n==1) return 10;
    
    var tmp = 9;
    for(var i=1;i<n;++i){
        
        for(var j=0;j<i;j++){
            tmp *= (9-j)
        }
        dp = dp + tmp;
        tmp = 9;
    }
    return dp

};