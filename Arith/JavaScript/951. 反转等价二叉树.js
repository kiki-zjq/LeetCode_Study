/** 
 * 2021/02/18
 *
 *  
我们可以为二叉树 T 定义一个翻转操作，如下所示：选择任意节点，然后交换它的左子树和右子树。

只要经过一定次数的翻转操作后，能使 X 等于 Y，我们就称二叉树 X 翻转等价于二叉树 Y。

编写一个判断两个二叉树是否是翻转等价的函数。这些树由根节点 root1 和 root2 给出。

 

示例：

输入：root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
输出：true
解释：我们翻转值为 1，3 以及 5 的三个节点。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/flip-equivalent-binary-trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if(root1==null&&root2==null)return true;
    if( (root1!=null&&root2==null) || (root1==null&&root2!=null) )return false;
    
    if(root1.val!=root2.val)return false;
    
    //处理只存在一个孩子
    if(root1.left==null&&root2.left==null)
    return flipEquiv(root1.left,root2.left)&&flipEquiv(root1.right,root2.right)
    
    if(root1.left==null||root2.left==null)
    return flipEquiv(root1.left,root2.right)&&flipEquiv(root1.right,root2.left)

    //处理左右孩子都存在/都不存在
    if(root1.left!=null&&root2.right!=null &&root1.left.val!=root2.left.val)
    return flipEquiv(root1.left,root2.right)&&flipEquiv(root1.right,root2.left)

    return flipEquiv(root1.left,root2.left)&&flipEquiv(root1.right,root2.right)

};