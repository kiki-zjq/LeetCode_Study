/** 
 * 2021/01/20
 *
 *  
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]



 

示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


// 递归函数：返回当前子树中 p 和 q 的 LCA。如果没有 LCA，就返回 null。

// 从根root开始递归搜索，递归搜到各个子树……

// 如果遍历到 p 或 q，比方说 p，则 LCA 要么是当前的 p（q 在 p 的子树中），要么是 p 之上的节点（q 不在 p 的子树中），不可能是 p 之下的节点。不用继续往下遍历，返回当前的 p。

// 当遍历到 null 节点，空树不存在 p 和 q，不存在 LCA，返回 null。

// 当遍历的节点 root 不是 p 或 q 或 null，则递归搜寻 root 的左右子树：

// 如果左右子树的递归都有结果，说明 p 和 q 分居 root 的左右子树，返回 root。
// 如果只是一个子树递归调用有结果，说明 p 和 q 都在这个子树，返回该子树递归结果。
// 如果两个子树递归结果都为 null，说明 p 和 q 都不在这俩子树中，返回 null。


const lowestCommonAncestor = (root, p, q) => {
    if (root == null) { // 遇到null，返回null 没有LCA
      return null;
    }
    if (root == q || root == p) { // 遇到p或q，直接返回当前节点
      return root;
    }
    // 非null 非q 非p，则递归左右子树
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    // 根据递归的结果，决定谁是LCA
    if (left && right) {
      return root;
    }
    if (left == null) {
      return right;
    }
    return left;
  };
  
