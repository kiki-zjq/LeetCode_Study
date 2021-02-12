/** 
 * 2021/02/12
 *
 *  
给你 root1 和 root2 这两棵二叉搜索树。

请你返回一个列表，其中包含 两棵树 中的所有整数并按 升序 排序。.

 

示例 1：



输入：root1 = [2,1,4], root2 = [1,0,3]
输出：[0,1,1,2,3,4]
示例 2：

输入：root1 = [0,-10,10], root2 = [5,1,7,0,2]
输出：[-10,0,0,1,2,5,7,10]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {

    // 中序遍历
    var inOrder = function(root, arr){
        if(!root) return;
        inOrder(root.left, arr);
        arr.push(root.val);
        inOrder(root.right, arr);
    }

    var arr1=[],arr2=[];
    inOrder(root1, arr1);
    inOrder(root2, arr2);
    var arr = arr1.concat(arr2).sort((a,b)=>a-b);
    return arr;
};