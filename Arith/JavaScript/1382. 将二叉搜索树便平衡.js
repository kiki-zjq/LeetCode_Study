/** 
 * 2021/03/12
 *
 * 
给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

如果有多种构造方法，请你返回任意一种。

 

示例：



输入：root = [1,null,2,null,3,null,4,null,null]
输出：[2,1,3,null,null,null,4]
解释：这不是唯一的正确答案，[3,1,4,null,2,null,null] 也是一个可行的构造方案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/balance-a-binary-search-tree
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
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let res = [];

    var inOrder = function(root){
        if(!root)return;

        inOrder(root.left);
        res.push(root.val);
        inOrder(root.right);
    }

    inOrder(root);
    // 先中序遍历 然后再构造平衡二叉树


    let mid = Math.floor(res.length/2);
    let newRoot = new TreeNode(res[mid]);

    var constructBalance = function(arr){
        if(arr.length==0)return null;

        let mid = Math.floor(arr.length/2);
        let node = new TreeNode(arr[mid]);
        node.left = constructBalance(arr.slice(0,mid));
        node.right = constructBalance(arr.slice(mid+1));
        return node;
    }

    newRoot.left = constructBalance(res.slice(0,mid));
    newRoot.right = constructBalance(res.slice(mid+1));

    return newRoot;
};