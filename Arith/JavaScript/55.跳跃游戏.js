/** 
 * 2020/08/30
 *
 *  
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:

输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:

输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

 */

// 关键点就是找数组中的0，如果数组没有0，一定是true。如果数组中有0，那么0前面至少得有一个数字比其到0的距离大。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(!nums.includes(0)){
        return true
    }
    let len = nums.length
    if (len === 1) return true
    
    let zeroIndex = []
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) zeroIndex.unshift(i)
    }
    // 从值为0的索引开始往前遍历，如果找到一个的值超过他们的距离，就证明可以跳过这个0
    for (let startIndex of zeroIndex) {
        let canOver = false
        for (let dist = 1; startIndex - dist >= 0 && !canOver; dist++) {
            if (nums[startIndex - dist] > dist) canOver = true
            if (nums[startIndex - dist] === dist && startIndex == len - 1) canOver = true
        }
        // 只要有一个0不能越过，就失败
        if (!canOver) return false
    }
    return true

};




/** 贪心算法的思路，算出当前可以达到的最大位置，根据最大位置去做出判断 */
var canJump = function(nums) {
    const length = nums.length
    let maxStep = 0
    for (let i = 0; i < length; i++) {
      /** 当前可以达到的最大位置，到不了当前遍历的位置i，直接返回false */
      if (maxStep < i) return false
      maxStep = Math.max(maxStep, i + nums[i])
      /** 当前可以达到的最大位置，已经可以达到最后一个位置，返回true */
      if (maxStep >= length - 1) return true
    }
  };
  