/** 
 * 2020/08/26
 *
 *  给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。

示例:

输入: [4, 6, 7, 7]
输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]


 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const res = [];
    const len = nums.length;
    const set = new Set();
    
    const dfs = (start, path) => {
      if (path.length >= 2) {
        const str = path.join(','); // 转成字符串，存入set
        if (!set.has(str)) {        // 避免重复的子序列进入res
          res.push(path.slice());   // 推入一份拷贝，path还要继续用
          set.add(str);
        }
      }
      for (let i = start; i < len; i++) {
        const prev = path[path.length - 1];
        const cur = nums[i];
        if (path.length == 0 || prev <= cur) {
          path.push(cur);    // 选择当前的数字
          dfs(i + 1, path);  // 继续往下递归
          path.pop();        // 撤销选择当前数字，选择别的数字
        }
      }
    };
    dfs(0, []);
    return res;
  
  };