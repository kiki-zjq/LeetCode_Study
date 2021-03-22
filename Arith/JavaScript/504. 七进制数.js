/** 
 * 2021/03/21
 *
 * 
给定一个整数，将其转化为7进制，并以字符串形式输出。

示例 1:

输入: 100
输出: "202"
示例 2:

输入: -7
输出: "-10"
注意: 输入范围是 [-1e7, 1e7] 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/base-7
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */




/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    // num / 7 = m ... n
    // n是最小位 num = m;
    let res = [];
    let flag = 0;
    if(num<0){
        flag = 1;
        num = Math.abs(num);
    }

    while(num>=7){
        let param = num % 7;
        num = Math.floor(num / 7);
        res.unshift(param);
    }

    res.unshift(num);
    return flag == 0 ? res.join(''):'-'+res.join('');
};