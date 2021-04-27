/** 
 * 2021/04/26
 *
 *  
传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

 

示例 1：

输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
输出：15
解释：
船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
第 1 天：1, 2, 3, 4, 5
第 2 天：6, 7
第 3 天：8
第 4 天：9
第 5 天：10

请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 
示例 2：

输入：weights = [3,2,2,4,1,4], D = 3
输出：6
解释：
船舶最低载重 6 就能够在 3 天内送达所有包裹，如下所示：
第 1 天：3, 2
第 2 天：2, 4
第 3 天：1, 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



 /**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */

// 原来是一个二分查找
var shipWithinDays = function(weights, D) {
    let right = weights.reduce((t,curr)=>{
        return t = t+curr;
    })
    
    let left = Math.max(...weights);
    let mid = 0;
    // 通过二分查找，去找到最少需要的运载能力
    // 二分查找的左边界是所有包裹中最重的那个 ==> 我们至少需要能够把最重的那一个包裹举起来
    // 右边界是所有包裹的总重量

    while(left < right){
        mid = Math.floor((left+right)/2);
        let need = 1, curr = 0;
        for(let weight of weights){
            if(curr+weight>mid){
                curr = weight;
                need++;
            }else{
                curr+=weight;
            }
        }

        if(need > D){
            left = mid+1;
        }else{
            right = mid;
        }
    }

    return left;
};