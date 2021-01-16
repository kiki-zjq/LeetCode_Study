/** 
 * 2021/01/16
 *
 *  
给你二叉搜索树的根节点 root ，该树中的两个节点被错误地交换。请在不改变其结构的情况下，恢复这棵树。

进阶：使用 O(n) 空间复杂度的解法很容易实现。你能想出一个只使用常数空间的解决方案吗？

 

示例 1：


输入：root = [1,3,null,null,2]
输出：[3,1,null,null,2]
解释：3 不能是 1 左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。
示例 2：


输入：root = [3,1,4,null,null,2]
输出：[2,1,4,null,null,3]
解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/recover-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const swap = (x, y) => {
    const temp = x.val;
    x.val = y.val;
    y.val = temp;
}

var recoverTree = function(root) {
    let x = null, y = null, pred = null, predecessor = null;

    while (root !== null) {
      if (root.left !== null) {
        // predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止
        predecessor = root.left;
        while (predecessor.right !== null && predecessor.right !== root)
          predecessor = predecessor.right;

        // 让 predecessor 的右指针指向 root，继续遍历左子树
        if (predecessor.right === null) {
          predecessor.right = root;
          root = root.left;
        }
        // 说明左子树已经访问完了，我们需要断开链接
        else {
          if (pred !== null && root.val < pred.val) {
            y = root;
            if (x === null) {
                x = pred;
            }
          }
          pred = root;

          predecessor.right = null;
          root = root.right;
        }
      }
      // 如果没有左孩子，则直接访问右孩子
      else {
        if (pred !== null && root.val < pred.val) {
            y = root;
            if (x === null) {
                x = pred;
            }
        }
        pred = root;

        root = root.right;
      }
    }
    swap(x, y);
};


// 使用了Morris遍历，可以查看这个网站https://zhuanlan.zhihu.com/p/101321696