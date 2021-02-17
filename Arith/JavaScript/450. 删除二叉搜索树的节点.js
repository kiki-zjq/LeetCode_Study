/** 
 * 2021/02/17
 *
 *  
给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

一般来说，删除节点可分为两个步骤：

首先找到需要删除的节点；
如果找到了，删除它。
说明： 要求算法时间复杂度为 O(h)，h 为树的高度。

示例:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

给定需要删除的节点值是 3，所以我们首先找到 3 这个节点，然后删除它。

一个正确的答案是 [5,4,6,2,null,null,7], 如下图所示。

    5
   / \
  4   6
 /     \
2       7

另一个正确答案是 [5,2,6,null,4,null,7]。

    5
   / \
  2   6
   \   \
    4   7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/delete-node-in-a-bst
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


 */



const deleteNode = function (root, key) {
    if (root == null) return root
  
    if (root.val > key) {
      // 往左子树找
      root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
      // 往右子树找
      root.right = deleteNode(root.right, key)
    } else {
      // 找到了
      if (!root.left && !root.right) {
        // 待删除的节点左右子树均为空。证明是叶子节点，直接删除即可
        root = null
      } else if (root.left && !root.right) {
        // 待删除的节点右子树为空，让待删除节点的左子树替代自己。
        root = root.left
      } else if (!root.left && root.right) {
        // 待删除的节点左子树为空，让待删除节点的右子树替代自己。
        root = root.right
      } else if (root.left && root.right) {
        // 如果待删除的节点的左右子树都不为空。我们需要找到比当前节点小的最大节点（前驱）来替换自己
        let last = root.left
        while (last.right) {
          last = last.right
        }
        // 最终的last就是比当前节点小的最大节点，将值进行替换
        root.val = last.val
        // 删除该最大节点
        root.left = deleteNode(root.left, last.val)
      }
    }
    return root
  }
  