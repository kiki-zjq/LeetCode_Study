/** 
 * 2021/02/05
 *
 *  
 * 编写一个程序，找出第 n 个丑数。

丑数就是质因数只包含 2, 3, 5 的正整数。

示例:

输入: n = 10
输出: 12
解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
说明:  

1 是丑数。
n 不超过1690。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ugly-number-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * */



/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    
    var res = [];
    res[0]=1;

    var num2=0,num3=0,num5=0;
    if(n==1)return 1;
    for(var i=1;i<n;i++){
        var min = Math.min(res[num2]*2 , res[num3]*3, res[num5]*5)
        res.push(min)

        if(min == res[num2]*2){
            num2++
        }
        if(min ==  res[num3]*3){
            num3++
        }
        if(min ==  res[num5]*5){
            num5++
        }
    }

    return res[n-1]
};
