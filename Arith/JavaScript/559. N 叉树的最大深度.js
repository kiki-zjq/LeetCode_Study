/** 
 * 2021/01/25
 *
 *  
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

N 叉树输入按层序遍历序列化表示，每组子节点由空值分隔（请参见示例）。

 

示例 1：



输入：root = [1,null,3,2,4,null,5,6]
输出：3

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-n-ary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


 */

var maxDepth = function(root) {
    const ret = [];
  if (!root) {
      return ret;
  }


  const q = [];
  q.push(root);
  while (q.length !== 0) {
      const currentLevelSize = q.length;
      ret.push([]);
      for (let i = 1; i <= currentLevelSize; ++i) {
          const node = q.shift();
          ret[ret.length - 1].push(node.val);

          for(let j=0; j<node.children.length;++j){
              q.push(node.children[j])
          }

      }
  }
      
  return ret.length;
};


// 还有一种解法

var maxDepth = function(root) {
    if (root === null) {
        return 0
    }
    if (root.children.length === 0) {
        return 1
    }
    let max = 0;
    for (let item in root.children) {
        let childNodeDepth = maxDepth(root.children[item]);
        max = Math.max(max, childNodeDepth)
    }
    return max + 1;
};
