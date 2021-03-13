/** 
 * 2021/03/13
 *
 * 
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
示例 2：

输入：target = 4, nums = [1,4,4]
输出：1
示例 3：

输入：target = 11, nums = [1,1,1,1,1,1,1,1]
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


 /**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (s, nums) => {
    let minLen = Infinity;
    let i = 0;
    let j = 0;
    let sum = 0;
    while (j < nums.length) {   // 主旋律是扩张，找可行解
        sum += nums[j];
            while (sum >= s) {        // 间歇性收缩，优化可行解
            minLen = Math.min(minLen, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return minLen === Infinity ? 0 : minLen; // 从未找到可行解，返回0
};
