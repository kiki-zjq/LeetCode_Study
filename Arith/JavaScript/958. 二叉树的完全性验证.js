/** 
 * 2021/02/19
 *
 *  
给定一个二叉树，确定它是否是一个完全二叉树。

百度百科中对完全二叉树的定义如下：

若设二叉树的深度为 h，除第 h 层外，其它各层 (1～h-1) 的结点数都达到最大个数，第 h 层所有的结点都连续集中在最左边，这就是完全二叉树。（注：第 h 层可能包含 1~ 2h 个节点。）

 

示例 1：



输入：[1,2,3,4,5,6]
输出：true
解释：最后一层前的每一层都是满的（即，结点值为 {1} 和 {2,3} 的两层），且最后一层中的所有结点（{4,5,6}）都尽可能地向左。
示例 2：



输入：[1,2,3,4,5,null,7]
输出：false
解释：值为 7 的结点没有尽可能靠向左侧。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree
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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if (!root) {
       return true
   }
   const queue = [{ node: root, index: 1 }]
   let count = 0
   while (queue.length) {
       const temp = queue.shift()
       const node = temp.node
       const index = temp.index
       // 用来判断索引位置节点是否存在，如果index !== ++count代表左右子树层级相差超过1层，或者最后一层没有左节点却有右节点
       if (index !== ++count) {
           return false
       }
       // 层序遍历过程中，用index来维护节点索引，如果根节点index为1，那么一个节点索引是index,那他的左孩子索引是index * 2,右孩子索引是index * 2 +1
       if(node.left) queue.push({ node: node.left, index: index * 2 })
       if(node.right) queue.push({ node: node.right, index: index * 2 + 1 })
   }
   return true

};