/** 
 * 2020/02/25
 *
 *  编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    示例 1:

    输入: ["flower","flow","flight"]
    输出: "fl"
    示例 2:

    输入: ["dog","racecar","car"]
    输出: ""
    解释: 输入不存在公共前缀。


 */

 /**
 * @param {string[]} strs
 * @return {string}
 */



// 首先利用sort的排序方法将数组按照编码排序，只需要校验array[0]和array[array.length-1]的值。
// 然后判断是否存在包含关系即array[0]包含于array[array.length-1]
// 最后对首尾两个值进行字符串匹配，得到公共前缀

var longestCommonPrefix = function(strs) {
    strs.sort()//按编码排序
    if (strs.length === 0) return ''//空数组返回''
    var first = strs[0],
        end = strs[strs.length - 1]
    if(first === end || end.match(eval('/^' + first + '/'))){
        return first//first包含于end返回first
    }
    for(var i=0;i<first.length;i++){
        if(first[i] !== end[i]){
            return first.substring(0,i)//匹配失败时返回相应字符串
        }
    }
};
