/** 
 * 2020/09/06
 *
 *  
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return []
    let res = [], 
        queue = [root]
    while(queue.length) {
        let curr = [],
            temp = []
        while(queue.length) {
            let node = queue.shift()
            curr.push(node.val)
            if(node.left) temp.push(node.left)
            if(node.right) temp.push(node.right)
        }
        res.push(curr)
        queue = temp
    }
    return res.reverse()
};
