/** 
 * 2020/09/06
 *
 *  
给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

 

示例 1:

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
示例 2:

输入: nums = [1], k = 1
输出: [1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/top-k-frequent-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    // 1. 设置哈希映射
    const keyValue = {};
  
    // 2. 遍历数组统计每个数字出现的次数
    for (let i = 0; i < nums.length; i++) {
      if (!keyValue[nums[i]]) {
        keyValue[nums[i]] = 0;
      }
      keyValue[nums[i]]++;
    }
  
    // 3. 将 nums 去重后进行排序，排序的依据是 keyValue 对应的哈希映射，最后取前 k 个
    return [...new Set(nums)].sort((a, b) => keyValue[b] - keyValue[a]).slice(0, k);
  };
  