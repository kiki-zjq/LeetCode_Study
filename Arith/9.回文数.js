/** 
 * 2020/02/20
 *
 * 回文数：
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */


//我的解法 220ms 46.4MB

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('')==x
};

//转换成字符串思路很简单，但是如果x很大性能消耗比较大。如果从两头开始往中间搜索的话，可以很快的判断是不是回文。

var isPalindrome = function(x) {
    let len = (x + '').length,flag = true;
    if(x < 0){
        return false;
    } else if (x >= 0&&x <10){
        return true;
    } else {
        for (let i = 0;i <  Math.floor(len/2); i++){
            let x1 = x%Math.pow(10, len - i)/Math.pow(10,len - i -1) < 1 ? 0 : parseInt(x%Math.pow(10, len - i)/Math.pow(10,len - i -1));
            if(x1 !== parseInt(x%Math.pow(10,i + 1)/Math.pow(10,i))) {
                flag = false;
            }
        }
    }
    return flag;
};


//这种方法类似于将数字x沿着中线对折，例如1221会拿前面的12和后面21翻折得到的12进行对比。

var isPalindrome = function(x) {
    if(x<0 || (x%10==0 && x!=0) ) return false;
    if(0<=x && x<10) return true;
    var revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x =Math.floor(x / 10);
    }
    
    
    return x==revertedNumber || x==Math.floor(revertedNumber / 10)
};