/** 
 * 2021/03/20
 *
 * 

给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

 

示例 1：

输入：nums = [1,2,3], target = 4
输出：7
解释：
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
示例 2：

输入：nums = [9], target = 3
输出：0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/combination-sum-iv
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */




const combinationSum4 = (nums, target) => {
    const dp = [1]
    nums.sort((a, b) => a - b)
    for (let i = 1; i <= target; i++) {
        dp[i] = 0
        for (let num of nums) {
        if (i < num) break
        dp[i] += dp[i - num]
        }
    }
    return dp[target]
}
