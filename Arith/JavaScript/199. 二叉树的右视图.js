/** 
 * 2021/01/19
 *
 *  
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-right-side-view
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    if(root==null)return [];

    let res=[], q =[root];
    
    while(q.length){
        let currentLevelSize = q.length;
        res.push([]);
        for(let i=1;i<=currentLevelSize;++i){
            const node = q.shift();
            res[res.length-1].push(node.val);
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
    }
    // res 即为层序遍历的结果
    let rightView = [];
    for(let i=0;i<res.length;i++){
        rightView.push(res[i][res[i].length-1])
    }

    return rightView;


};


// DFS

var rightSideView = function(root) {
    if(!root) return []
    let arr = []
    dfs(root, 0, arr)
    return arr
  };
  function dfs (root, step, res) {
    if(root){
      if(res.length === step){
        res.push(root.val)           // 当数组长度等于当前 深度 时, 把当前的值加入数组
      }
      // console.log(step, '-------', res)
      dfs(root.right, step + 1, res) // 先从右边开始, 当右边没了, 再轮到左边
      dfs(root.left, step + 1, res)
    }
  }
  