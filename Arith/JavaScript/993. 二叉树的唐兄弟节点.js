/** 
 * 2021/03/12
 *
 * 
在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

 

示例 1：


输入：root = [1,2,3,4], x = 4, y = 3
输出：false
示例 2：


输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cousins-in-binary-tree
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if(!root)return false;

    let q = [root];

    let prevX = -1, prevY = -1;

    while(q.length){
        let levelSize = q.length;
        for(var i=0; i<levelSize; i++){
            let node = q.shift();

            if(node.left){
                if(node.left.val == x){
                    prevX = node.val;
                }
                if(node.left.val == y){
                    prevY = node.val;
                }
                q.push(node.left);
            }

            if(node.right){
                if(node.right.val == x){
                    prevX = node.val;
                }
                if(node.right.val == y){
                    prevY = node.val;
                }
                q.push(node.right);
            }
        }

        if(prevX != -1 || prevY != -1){
            if(prevX != prevY && prevX != -1 && prevY != -1)return true;
            else{
                return false;
            }
        }


    }

    return false;
};