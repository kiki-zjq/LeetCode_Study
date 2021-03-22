/** 
 * 2021/03/21
 *
 * 
给定一个有 N 个结点的二叉树的根结点 root，树中的每个结点上都对应有 node.val 枚硬币，并且总共有 N 枚硬币。

在一次移动中，我们可以选择两个相邻的结点，然后将一枚硬币从其中一个结点移动到另一个结点。(移动可以是从父结点到子结点，或者从子结点移动到父结点。)。

返回使每个结点上只有一枚硬币所需的移动次数。

 

示例 1：



输入：[3,0,0]
输出：2
解释：从树的根结点开始，我们将一枚硬币移到它的左子结点上，一枚硬币移到它的右子结点上。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/distribute-coins-in-binary-tree
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
 * @return {number}
 */
var distributeCoins = function(root) {

    let move = 0;

    let helper = function(root){
        if(!root){
            return 0;
        }
        let leftVal = helper(root.left);
        let rightVal = helper(root.right);

        move += Math.abs(leftVal) + Math.abs(rightVal);

        return rightVal+leftVal+root.val-1;
        
    }

    helper(root);

    return move;
};