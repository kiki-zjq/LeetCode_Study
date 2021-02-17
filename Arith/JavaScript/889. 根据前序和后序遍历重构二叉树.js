/** 
 * 2021/02/17
 *
 *  
返回与给定的前序和后序遍历匹配的任何二叉树。

 pre 和 post 遍历中的值是不同的正整数。

 

示例：

输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
输出：[1,2,3,4,5,6,7]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {

    if(pre.length == 0){
        return null;
    };
    var root = new TreeNode(pre[0]);
    // pre[1]是左子树的根节点,在后序遍历左子树的时候,这个节点会被最后访问
    var index = post.indexOf(pre[1]);
    var lPre = pre.slice(1,2+index);
    var rPre = pre.slice(2+index);
    var lPost = post.slice(0,index+1);
    var rPost = post.slice(index+1,post.length-1);
    root.left = constructFromPrePost(lPre,lPost);
    root.right = constructFromPrePost(rPre,rPost);
    return root;
};