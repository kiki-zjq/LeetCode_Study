/** 
 * 2021/03/04
 *
 *  
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

 

示例：

输入：
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出：3
解释：
长度最长的公共子数组是 [3, 2, 1] 。
 

提示：

1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



 /**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    var dp = Array.from(new Array(A.length+1),()=>new Array(B.length+1).fill(0))

    // dp[i][j]表示包含A[i-1] B[j-1]的最长重复子数组
    var max = 0;
    for(var i=1;i<=A.length;i++){
        for(var j=1;j<=B.length;j++){
            if(B[j-1]==A[i-1]){
                dp[i][j] = dp[i-1][j-1]+1;
            }
            max = Math.max(max,dp[i][j])
        }
    }    

    return max
};