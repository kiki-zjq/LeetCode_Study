/** 
 * 2021/01/23
 *
 *  
计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sum-of-left-leaves
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


var sumOfLeftLeaves = function(root) {

    var dfs = function(root){
        var ans = 0;
        
        if (root.left != null) {
            ans += isLeafNode(root.left) ? root.left.val : dfs(root.left);
        }
        
        if (root.right != null && !isLeafNode(root.right)) {
            ans += dfs(root.right);
        }
        
        return ans;
    }

    var isLeafNode = function(root){
        return root.left == null && root.right == null
    }

    return root != null ? dfs(root) : 0;
};

