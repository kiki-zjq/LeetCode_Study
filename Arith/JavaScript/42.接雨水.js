/** 
 * 2020/02/24
 *
 *  给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。


 */



 /**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length
        let sum = new Array(len)   // 存放每列水量
        
        // 动态规划
        let leftHighest = new Array(len)   // 存放第i个墙左边最高的高度 不含i
        let rightHighest = new Array(len)  // 存放第i个墙右边最高的高度 不含i
        for(let i=0;i<len;i++){     // 全部初始化为0
            leftHighest[i] = rightHighest[i] = 0
        }
    
        for(let i=1;i<len-1;i++){   // 得到leftHighest数组
            leftHighest[i] = Math.max(leftHighest[i-1],height[i-1])       
        }
        for(let i=len-2;i>-1;i--){
            rightHighest[i] = Math.max(rightHighest[i+1],height[i+1])
        }
    
        for(let i=0;i<len;i++){
            let setHeight = leftHighest[i]<[rightHighest[i]]?leftHighest[i]:rightHighest[i]
            sum[i] = setHeight>height[i]?setHeight-height[i]:0
        }
        
        let res = 0
        for(let i in sum){
            res += sum[i]
        }
        return res
    
    };


    // 下面这个方法，每次计算的都是从最高峰到自己高度的那段距离

 var trap = function(height) {
        let i = 0,
            j = height.length - 1,
            left = height[i],
            right = height[j],
            res = 0;
        
        while(i < j) {
            left = Math.max(left, height[i]);
            right = Math.max(right, height[j]);
            
            if (left < right)
                res += left - height[i++];
            else
                res += right - height[j--];
        }
        return res;
    };