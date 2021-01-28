/** 
 * 2021/01/28
 *
 *  
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



const sortedListToBST = (head) => {
    const arr = [];
    while (head) { // 将链表节点的值逐个推入数组arr
      arr.push(head.val);
      head = head.next;
    }
    // 根据索引start到end的子数组构建子树
    const buildBST = (start, end) => {
      if (start > end) return null;        // 指针交错，形成不了子序列，返回null节点
      const mid = (start + end) >>> 1;     // 求中间索引 中间元素是根节点的值
      const root = new TreeNode(arr[mid]); // 创建根节点
      root.left = buildBST(start, mid - 1); // 递归构建左子树
      root.right = buildBST(mid + 1, end);  // 递归构建右子树
      return root;                          // 返回当前子树
    };
  
    return buildBST(0, arr.length - 1);  // 根据整个arr数组构建
  };
  
  



// 快慢指针
  const sortedListToBST = (head) => {
    if (head == null) return null;
    let slow = head;
    let fast = head;
    let preSlow; // 保存slow的前一个节点
  
    while (fast && fast.next) {
      preSlow = slow;        // 保存当前slow
      slow = slow.next;      // slow走一步
      fast = fast.next.next; // fast走两步
    }
    const root = new TreeNode(slow.val);     // 根据slow指向的节点值，构建节点
  
    if (preSlow != null) {   // 如果preSlow有值，即slow左边有节点，需要构建左子树
      preSlow.next = null;   // 切断preSlow和中点slow
      root.left = sortedListToBST(head);     // 递归构建左子树
    }
    root.right = sortedListToBST(slow.next); // 递归构建右子树
    return root;
  };
  