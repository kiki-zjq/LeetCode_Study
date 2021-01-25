/** 
 * 2021/01/26
 *
 *  
如果一棵二叉树满足下述几个条件，则可以称为 奇偶树 ：

二叉树根节点所在层下标为 0 ，根的子节点所在层下标为 1 ，根的孙节点所在层下标为 2 ，依此类推。
偶数下标 层上的所有节点的值都是 奇 整数，从左到右按顺序 严格递增
奇数下标 层上的所有节点的值都是 偶 整数，从左到右按顺序 严格递减
给你二叉树的根节点，如果二叉树为 奇偶树 ，则返回 true ，否则返回 false 。

 

示例 1：



输入：root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
输出：true
解释：每一层的节点值分别是：
0 层：[1]
1 层：[10,4]
2 层：[3,7,9]
3 层：[12,8,6,2]
由于 0 层和 2 层上的节点值都是奇数且严格递增，而 1 层和 3 层上的节点值都是偶数且严格递减，因此这是一棵奇偶树。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/even-odd-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

 */


 
var isEvenOddTree = function(root) {
    if(root == null) return true  
  let queue = [], prev = null, level = 0
  queue.push(root)
  while(queue.length){
    let size = queue.length
    for(let i=0;i<size;i++){
      let cur = queue.shift()
      if(level % 2 == 0){//偶数下标
        if(cur.val % 2 == 0 || (prev && prev.val >= cur.val)) {
          return false 
        }
      }else{ //奇数下标
        if(cur.val % 2 != 0 || (prev && prev.val <= cur.val)) {
          return false 
        }
      }
      prev = cur
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    prev = null
    level += 1
  }
  return true
};