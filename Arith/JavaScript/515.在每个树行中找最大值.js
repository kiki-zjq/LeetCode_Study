/** 
 * 2021/01/24
 *
 *  
您需要在二叉树的每一行中找到最大的值。

示例：

输入: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

输出: [1, 3, 9]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-bottom-left-tree-value
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */

 
var largestValues = function (root) {
    /* 解法一 BFS */

    // 边界处理
    if (!root) return []


    // 变量定义
    const res = [], queue = [root]

    while (queue.length) {
        const curLevLen = queue.length // 当前层可遍历次数

        let curMax = Number.MIN_SAFE_INTEGER

        for (let i = 0; i < curLevLen; i++) {
            // 依次出队 当前层节点node
            const node = queue.shift()
            curMax = Math.max(curMax, node.val)

            // 若有子节点则入队
            node.left  && queue.push(node.left)
            node.right && queue.push(node.right)
        }

        res.push(curMax)
    }

    return res
}
