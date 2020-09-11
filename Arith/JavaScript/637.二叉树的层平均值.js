/** 
 * 2020/09/11
 *
 *  
 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

 说明：
 
 所有数字都是正整数。
 解集不能包含重复的组合。 
 示例 1:
 
 输入: k = 3, n = 7
 输出: [[1,2,4]]
 示例 2:
 
 输入: k = 3, n = 9
 输出: [[1,2,6], [1,3,5], [2,3,4]]
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/combination-sum-iii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    var res = []
    // 使用map存值
    var map = new Map()
    var stack = [root]
    const dfs = (root , l) => {
      if(!root) return
      if(map.has(l)) {
        var num = map.get(l)
        num[0] += root.val
        num[1] += 1
        map.set(l,num)
      } else {
        var num = [root.val,1]
        map.set(l,num)
      }
    // 遍历左右节点
      dfs(root.left, l+1)
      dfs(root.right, l+1)
    }
    dfs(root,1)
    for(var [key,val] of map) {
      res.push(val[0] / val[1])
    }
    return res
};
