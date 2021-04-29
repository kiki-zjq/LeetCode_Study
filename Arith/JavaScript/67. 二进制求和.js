/** 
 * 2021/04/27
 *
 *  
    给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-binary
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let len = Math.max(a.length, b.length);
    a = a.padStart(len, '0');
    b = b.padStart(len, '0');
    let val = 0, params = 0;
    let res = '';
    for(let i=len-1; i>=0; i--){
        val = parseInt(a[i]) + parseInt(b[i]) + params;
        params = Math.floor(val/2);
        res = val%2 + res;
    }
    if(params == 1){
        res = '1' + res;
    }
    return res;
};