/** 
 * 2021/02/16
 *
 *  
输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。

 

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
链接：https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof
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
    
    var root = new TreeNode(preorder[0]);
    var index = inorder.indexOf(preorder[0]);

    var leftInOrder = inorder.slice(0,index);
    var rightInOrder = inorder.slice(index+1);

    var leftPreOrder = preorder.slice(1,index+1);
    var rightPreOrder = preorder.slice(index+1);

    root.left = buildTree(leftPreOrder,leftInOrder);
    root.right = buildTree(rightPreOrder,rightInOrder);

    return root;


};