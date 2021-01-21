/** 
 * 2021/01/22
 *
 *  
给定一个二叉搜索树，编写一个函数 kthSmallest 来查找其中第 k 个最小的元素。

说明：
你可以假设 k 总是有效的，1 ≤ k ≤ 二叉搜索树元素个数。

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 1
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */



var kthSmallest = function(root, k) {
    // 二叉搜索树直接中序遍历即可
    var res = []
    var helper = function(root){
        if(!root)return;
        if(root.left) helper(root.left);
        res.push(root.val);
        if(root.right) helper(root.right);
    };
    helper(root);
    return res[k-1];
};