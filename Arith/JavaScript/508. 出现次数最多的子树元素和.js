/** 
 * 2021/03/12
 *
 * 
给你一个二叉树的根结点，请你找出出现次数最多的子树元素和。一个结点的「子树元素和」定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

你需要返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

 

示例 1：
输入:

  5
 /  \
2   -3
返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。

示例 2：
输入：

  5
 /  \
2   -5
返回 [2]，只有 2 出现两次，-5 只出现 1 次。

 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/most-frequent-subtree-sum
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
var findFrequentTreeSum = function(root) {
    let map = new Map();

    let getSum = function(root){
        if(!root)return 0;
        let l = getSum(root.left);
        let r = getSum(root.right);
        let sum = l + r + root.val;
        if(map.has(sum)){
            map.set(sum, map.get(sum)+1);
        }else{
            map.set(sum, 1);
        }
        return sum;
    }
    getSum(root);

    let max = 0, res=[];
    let temp = 0;//temp 用来判断每次max有无更新
    for(let key of map.keys()){
        max = Math.max(max, map.get(key));
        if(temp!=max){
            res = [];
        }

        if(max == map.get(key)){
            res.push(key);
        }
        temp = max;
    }

    return res;
};