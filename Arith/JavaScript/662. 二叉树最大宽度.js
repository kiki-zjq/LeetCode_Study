/** 
 * 2021/03/28
 *
 *  
给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空。

每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。

示例 1:

输入: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

输出: 4
解释: 最大值出现在树的第 3 层，宽度为 4 (5,3,null,9)。
示例 2:

输入: 

          1
         /  
        3    
       / \       
      5   3     

输出: 2
解释: 最大值出现在树的第 3 层，宽度为 2 (5,3)。
示例 3:

输入: 

          1
         / \
        3   2 
       /        
      5      

输出: 2
解释: 最大值出现在树的第 2 层，宽度为 2 (3,2)。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-width-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



var widthOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }
    let ans = 1n, que = [[0n, root]];
    // 这里0n和1n是用了BigInt
    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt
    while (que.length) {
        const width = que[que.length - 1][0] - que[0][0] + 1n
        if (width > ans) {
            ans = width
        }
        let tmp = []
        for (const [i, q] of que) {
            q.left && tmp.push([i * 2n, q.left])
            q.right && tmp.push([i * 2n + 1n, q.right])
        }
        que = tmp
    }
    return Number(ans)
};
