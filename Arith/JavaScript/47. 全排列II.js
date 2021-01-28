/** 
 * 2021/01/29
 *
 *  
 * 
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

const permuteUnique = (nums) => {
    const res = [];
    const len = nums.length;
    const used = new Array(len);
    nums.sort((a, b) => a - b); // 升序排序
  
    const helper = (path) => {
      if (path.length == len) { // 个数选够了
        res.push(path.slice()); // path的拷贝 加入解集
        return;                 // 结束当前递归 结束当前分支
      }
  
      for (let i = 0; i < len; i++) { // 枚举出所有的选择
        if (nums[i - 1] == nums[i] && i - 1 >= 0 && !used[i - 1]) { // 避免产生重复的排列
          continue;
        }
        if (used[i]) {      // 这个数使用过了，跳过。
          continue;
        }
        path.push(nums[i]); // make a choice
        used[i] = true;     // 记录路径上做过的选择
        helper(path);       // explore，基于它继续选，递归
        path.pop();         // undo the choice
        used[i] = false;    // 也要撤销一下对它的记录
      }
    };
  
    helper([]);
    return res;
  };
  