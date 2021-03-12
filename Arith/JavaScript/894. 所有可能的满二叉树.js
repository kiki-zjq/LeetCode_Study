/** 
 * 2021/03/12
 *
 * 
满二叉树是一类二叉树，其中每个结点恰好有 0 或 2 个子结点。

返回包含 N 个结点的所有可能满二叉树的列表。 答案的每个元素都是一个可能树的根结点。

答案中每个树的每个结点都必须有 node.val=0。

你可以按任何顺序返回树的最终列表。

 

示例：

输入：7
输出：[[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
解释：

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/all-possible-full-binary-trees
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
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    if(N % 2 == 0) return []

    let hash = []
    hash[1] = [new TreeNode(0)]

    return handle(N)

    function handle(N) {
        if(hash[N]) return hash[N]
        
        for(let i = 1 ; i < N ; i += 2) {
            let temp = []
            let leftNum = i
            let rightNum = (N - 1) - i
            
            let leftList 
            let rightList 

            leftList = hash[leftNum] ? hash[leftNum] : handle(leftNum)
            rightList = hash[rightNum] ? hash[rightNum] : handle(rightNum)

            leftList.forEach(left => {
                rightList.forEach(right => {
                    let node = new TreeNode(0)
                    node.left = left
                    node.right = right

                    temp.push(node)
                })
            })
            
            if(!hash[N]) hash[N] = []
            temp.forEach(t => {
                hash[N].push(t)
            })

        }
        return hash[N]
    }
};
