/** 
 * 2020/09/02
 *
 *  
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。



在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [], last = [];
    for(let i = 0; i < rowIndex + 1; i++){
        last = res;
        res = [];
        res[0] = 1;
        res[i] = 1;
        if(i > 1){
            for(let j = 1; j < i; j++){
                res[j] = last[j - 1] + last[j];
            }
        }
    }
    return res;
};
