/** 
 * 2020/09/02
 *
 *  
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null
    const node = new TreeNode(preorder[0])
    const index = inorder.indexOf(preorder[0])
    const inLeft = inorder.slice(0, index)
    const inRight = inorder.slice(index + 1)
    const preLeft = preorder.slice(1, index + 1)
    const preRight = preorder.slice(index + 1)
    node.left = buildTree(preLeft, inLeft)
    node.right = buildTree(preRight, inRight)
    return node
};
