/** 
 * 2020/12/08
 *
 *  
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sqrtx
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number} x
 * @return {number}
 */

 // 二分法
var mySqrt = function(x) {
    if(x==0) return 0;
    let left = 1, right = x, mid = Math.floor((left+right)/2);
    while(left<=right){
        if(mid*mid == x ) return mid;
        if(mid*mid < x ){
            left = mid + 1;
            mid =  Math.floor((left+right)/2);
        }else{
            right = mid - 1;
            mid =  Math.floor((left+right)/2);
        }
    }
    return right
};


// 牛顿迭代法

var mySqrt = function(x) {
    let a = x;
    while (a*a > x){
        a = Math.floor((a + x/a)/2);
    }
    return a;
};