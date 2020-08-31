/** 
 * 2020/09/01
 *
 *  
给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

说明：解集不能包含重复的子集。

示例:

输入: nums = [1,2,3]
输出:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]


 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    for(let i = 0;i < nums.length;i++){
        let len = res.length;
        for(let j = 0;j < len;j++){
            let sub = res[j].slice();
            sub.push(nums[i]);
            res.push(sub);
        }
    }
    return res;
};
