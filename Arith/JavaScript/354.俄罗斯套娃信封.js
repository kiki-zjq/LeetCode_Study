/** 
 * 2021/03/04
 *
 *  
给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样。

请计算最多能有多少个信封能组成一组“俄罗斯套娃”信封（即可以把一个信封放到另一个信封里面）。

说明:
不允许旋转信封。

示例:

输入: envelopes = [[5,4],[6,4],[6,7],[2,3]]
输出: 3 
解释: 最多信封的个数为 3, 组合为: [2,3] => [5,4] => [6,7]。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/russian-doll-envelopes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


 /**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {

    if(envelopes.length<=1)return envelopes.length;

    envelopes = envelopes.sort((a,b)=>{
        if(a[0]-b[0]!=0)return a[0]-b[0];
        else{
            return a[1]-b[1]
        }
    })

    var dp = new Array(envelopes.length+1).fill(0);
    // dp[n]为包含了第n个信封的套娃的最大数目
    dp[0]=0,dp[1]=1;
    var max = 1;
    var temp = 0;
    for(var i=2;i<=envelopes.length;i++){
        for(var j=i-1;j>0;j--){
            if(envelopes[j-1][0]<envelopes[i-1][0] && envelopes[j-1][1]<envelopes[i-1][1]){
                temp = Math.max(temp, dp[j])
            }
        }
        dp[i] = temp + 1;
        temp = 0;
        max = Math.max(max,dp[i]);
    }

    return max;
};