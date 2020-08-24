/** 
 * 2020/02/25
 *
 *  罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

    字符          数值
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
    例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

    通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

    I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
    X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
    C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
    给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

    示例 1:

    输入: "III"
    输出: 3
    示例 2:

    输入: "IV"
    输出: 4

 */

 /**
 * @param {string} s
 * @return {number}
 */

 // 采用遍历的方式，判断当前位置的值如果比后面一个小，就相减，否则相加

var romanToInt = function(s) {
    var obj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    if (s.length == 0) return 0;
    if (s.length == 1) return obj[s];
    
    var result = 0;
    for (var i=0; i<s.length; i++) {
        if(obj[s[i]] < obj[s[i+1]]) {
            result += obj[s[i+1]] - obj[s[i]]
            i++
        } else {
            result += obj[s[i]]
        }
    }
    return result;
};