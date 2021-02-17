/** 
 * 2021/02/17
 *
 *  
给定一个二叉树，根节点为第1层，深度为 1。在其第 d 层追加一行值为 v 的节点。

添加规则：给定一个深度值 d （正整数），针对深度为 d-1 层的每一非空节点 N，为 N 创建两个值为 v 的左子树和右子树。

将 N 原先的左子树，连接为新节点 v 的左子树；将 N 原先的右子树，连接为新节点 v 的右子树。

如果 d 的值为 1，深度 d - 1 不存在，则创建一个新的根节点 v，原先的整棵树将作为 v 的左子树。

示例 1:

输入: 
二叉树如下所示:
       4
     /   \
    2     6
   / \   / 
  3   1 5   

v = 1

d = 2

输出: 
       4
      / \
     1   1
    /     \
   2       6
  / \     / 
 3   1   5   

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-one-row-to-tree
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if(root==null)return;

    if(d==1){
        var newNode = new TreeNode(v);
        newNode.left = root;
        root = newNode;
    }
    
    if(d==2){
        if(root.left){
            var left = new TreeNode(v);
            left.left = root.left;
            root.left = left;
        }
        if(root.right){
            var right = new TreeNode(v);
            right.right = root.right;
            root.right = right;
        }
        if(!root.right){
            root.right = new TreeNode(v);
        }
        if(!root.left){
            root.left = new TreeNode(v);
        }
    }else{
        addOneRow(root.left,v,d-1);
        addOneRow(root.right,v,d-1);
    }
    return root;
};