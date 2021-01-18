/** 
 * 2021/01/18
 *
 *  
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：true
示例 2：


输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
示例 3：

输入：root = []
输出：true

 */


 // 第一种做法 自顶向下
 var isBalanced = function(root) {
    if(root==null){
        return true;
    }else{
        return Math.abs(height(root.left)-height(root.right))<=1 && isBalanced(root.left) && isBalanced(root.right)
    }
    
};

var height = function(root){
    if(root==null){
        return 0
    }else{
        return Math.max(height(root.left), height(root.right)) + 1;
    }
}

// 第二种做法 自下向上

var isBalanced = function(root) {
    return height(root) >= 0;
};

var height = function(root){
    if (root == null) {
            return 0;
    }

    var leftHeight = height(root.left);
    var rightHeight = height(root.right);
    
    if (leftHeight == -1 || rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
   



 
