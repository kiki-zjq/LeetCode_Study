/** 
 * 2020/12/08
 *
 *  
在一排多米诺骨牌中，A[i] 和 B[i] 分别代表第 i 个多米诺骨牌的上半部分和下半部分。（一个多米诺是两个从 1 到 6 的数字同列平铺形成的 —— 该平铺的每一半上都有一个数字。）

我们可以旋转第 i 张多米诺，使得 A[i] 和 B[i] 的值交换。

返回能使 A 中所有值或者 B 中所有值都相同的最小旋转次数。

如果无法做到，返回 -1.


输入：A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
输出：2
解释：
图一表示：在我们旋转之前， A 和 B 给出的多米诺牌。
如果我们旋转第二个和第四个多米诺骨牌，我们可以使上面一行中的每个值都等于 2，如图二所示。


输入：A = [3,5,1,2,3], B = [3,6,3,3,4]
输出：-1
解释：
在这种情况下，不可能旋转多米诺牌使一行的值相等。


 */

 

// 如果有答案 那么A[0]或者B[0]这两个数中的一个一定被包含在其中
// 先用A[0]去直接遍历数组A和B 每一个A[i]或者B[i]必须包含A[0] 否则返回负一
// toTop 使得数组A全部等于A[0]需要移到的次数 即 A[i] !== A[0] 且 B[i] === A[0]
// toBottom 使得数组B全部等于A[0]需要移到的次数 即 A[i] === A[0] 且 B[i] !== A[0]
// 取toTop和toBottom较小值
// 如果返回的结果不是-1 表明有结果
// 如果B[0] === A[0] 则无需在计算
// 否则B[0] !== A[0] 如果也有结果切不是-1
// 则说明A B两个数组每一个位置上 若A[i] = A[0] 则B[i] = B[0]
// 或者A[i] = B[0] 则B[i] = A[0]
// 前面我们得到移到A[0]时的结果 实际上也在移到B[0] 所以得到的结果是完全相同的




 /**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
    let helper = function (num) {
      let toTop = 0;
      let toBottom = 0;
      for (let i = 0, len = A.length; i < len; ++i) {
        if (A[i] === num) {
          if (B[i] !== num)++toBottom
        } else if (B[i] === num) {
          if (A[i] !== num)++toTop
        } else {
          return -1;
        }
      }
      return Math.min(toBottom, toTop);
    }
    let res = helper(A[0]);
    if (res !== -1 || A[0] === B[0]) {
      return res;
    } else {
      return helper(B[0])
    }
  };
  
  