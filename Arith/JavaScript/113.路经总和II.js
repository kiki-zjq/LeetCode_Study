/** 
 * 2021/01/18
 *
 *  
给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/path-sum-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


const pathSum = (root, sum) => {
    // 1. 设置结果集
    const result = [];
  
    // 2. 深度优先搜索：root -> 树；path -> 路径；treeSum -> 当前路径和
    const recursion = (root, path, treeSum) => {
      // 2.1 终止条件
      if (!root) {
        return;
      }
  
      // 2.2 路径添加一个元素
      path.push(root.val);
  
      // 2.3 计算当前路径总和
      treeSum += root.val;
  
      // 2.4 如果没有左子树和右子树（叶子节点）
      if (!root.left && !root.right) {
        // 2.5 如果结果等于目标结果
        if (treeSum === sum) {
          result.push(path.slice());
        }
      } else {
        // 2.6 进一步递归左子树和右子树
        recursion(root.left, path, treeSum);
        recursion(root.right, path, treeSum);
      }
  
      // 2.7 回溯
      path.pop();
    };
    recursion(root, [], 0);
  
    // 3. 返回结果
    return result;
  };
  