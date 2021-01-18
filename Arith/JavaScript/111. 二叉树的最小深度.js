/** 
 * 2021/01/18
 *
 *  
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2


 */


 
var minDepth = function(root) {
    if(root==null){
        return 0
    }else{
        if(root.left&&root.right)
            return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
        if(root.left&&!root.right)
            return minDepth(root.left)+1;
        if(root.right&&!root.left)
            return minDepth(root.right)+1;
        else
            return 1
    }
};