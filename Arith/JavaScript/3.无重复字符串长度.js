/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var array = s.split('');
    if(!array.length)return 0;
    var numArr=[];//这个数组用来存储无重复字符的长度
    var nowArr=[];//这个数组存储目前的无重复字符
    for(var i=0;i<array.length;i++){
        nowArr.push(array[i]);
        var setArr = [...new Set(nowArr)];
        if(setArr.length!=nowArr.length){//当二者长度不等，说明有重复字符了
            numArr.push(nowArr.length-1);
            nowArr.splice(0,nowArr.indexOf(array[i])+1);
        }
        console.log(nowArr)
    }
    numArr.push(nowArr.length);
    return numArr.sort((a,b)=>{
        return b-a;
    })[0];//这里有一个小点需要注意，如果直接用numArr.sort(),当数组是[1,7,10]的时候，返回的是[1,10,7]，所以得自己写一个函数
};

var lengthOfLongestSubstring = function(s) {
    // 两个指针 A . B
    // A 负责移动遍历整个字符串。B始终指向最近那个重复的字符
    let tempMaxLength = 0;
    let left = 0;
    let right = 0
    const map = new Map();
    for (; right < s.length; right++ ) {
        if (map.has(s[right]) && map.get(s[right]) >= left ) {
            tempMaxLength = Math.max(right - left , tempMaxLength);
            left = map.get(s[right]) + 1;
        } 
        map.set(s[right],right);
    }
    tempMaxLength = Math.max(right - left , tempMaxLength);
    return tempMaxLength;
};
