/** 
 * 2021/03/10
 *
 * 
给你一个树，请你 按中序遍历 重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。

 

示例 ：

输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/increasing-order-search-tree
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    if(!root)return null;

    let res = [];
    
    var inOrder = function(root){
        if(!root)return;
        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }

    inOrder(root);

    let resRoot = new TreeNode(res[0]);
    let prev = resRoot;
    for (let i = 1; i < res.length; i++) {
        let cur = new TreeNode(res[i]);
        prev.left = null;
        prev.right = cur;
        prev = cur;
    }
    
    return resRoot;
};