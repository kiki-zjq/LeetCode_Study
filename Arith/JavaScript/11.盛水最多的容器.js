/** 
 * 2020/02/24
 *
 *  给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

    说明：你不能倾斜容器，且 n 的值至少为 2。


 */

 // 1. 暴力法 两层循环O(n`2)复杂度

 /**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var res = 0;
    for (var i = 0; i < height.length - 1; i++) {
        for (var j = i + 1; j < height.length; j++) {
            var temp = (j - i) * Math.min(height[i],height[j]);
            if (temp > res) {
                res = temp;
            }
        }
    }
    return res;
};


// 2.双指针法
/**
 * @param {number[]}
 * @return {number}
 */
var maxArea = function(height) {
    var len = height.length;
    if(len<2) return 0;
    var max = 0;
    var l = 0;
    var r = len -1;
    while(l<r) {
        var temp = Math.min(height[l],height[r])*(r-l);
        max = Math.max(temp,max);
        if(height[l]<height[r]) {
            l++
        } else {
            r--
        }
    }
    return max;
};