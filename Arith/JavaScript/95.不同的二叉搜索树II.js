/** 
 * 2021/01/15
 *
 *  
给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。

 

示例：

输入：3
输出：
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释：
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/unique-binary-search-trees-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


// 按照 BST 的定义，如果整数 i 作为根节点，则整数 1 ~ i-1 会去构建左子树，i+1 ~ n 会去构建右子树
// 以 i 为根节点的 BST 种类数 = 左子树 BST 种类数 * 右子树 BST 种类数
// 所以，不同的 i 之下，左右 BST 子树任意搭配出不同的组合，就构成了不同的 BST


 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n == 0) return [];
    const getAllBSTs = (low, high) => {
      if (low > high) return [null];
      if (low == high) return [new TreeNode(low)];
      const res = [];
      for (let i = low; i <= high; i++) {
        const leftBSTs = getAllBSTs(low, i - 1);
        const rightBSTs = getAllBSTs(i + 1, high);
        for (const leftBST of leftBSTs) {
          for (const rightBST of rightBSTs) {
            const root = new TreeNode(i);
            root.left = leftBST;
            root.right = rightBST;
            res.push(root);
          }
        }
      }
      return res;
    };
    return getAllBSTs(1, n);
  
  };