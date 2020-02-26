/** 
 * 2020/02/26
 *
 *  合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

    示例:

    输入:
    [
      1->4->5,
      1->3->4,
      2->6
    ]
    输出: 1->1->2->3->4->4->5->6


 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let ans = new ListNode( null ), queue = [];
    
    queue = [...lists];
    while (queue.length > 1) {
      let first = queue.shift(), //shift删除并返回数组的第一个元素
          second = queue.shift();
      let c = merge(first, second);
      queue.push( c );
    }
    
    return queue.shift() || null;
  };
  
  function merge(l1, l2) { // 转换为合并两个有序链表的问题
    let newList = new ListNode( 0 ), p = newList;
    
    while (l1 && l2) {
      if (l1.val < l2.val) {
        p.next = l1;
        p = p.next;
        l1 = l1.next;
      } else {
        p.next = l2;
        p = p.next;
        l2 = l2.next;
      }
    }
    
    if (l1 !== null) p.next = l1;
    if (l2 !== null) p.next = l2;
    
    return newList.next;
  }
  
  // 这里其实用了“分治”的思想，每次都会merge queue中前两个链表，并将merge后的结果放在queue尾部
  // 这样的话merge函数调用次数较少。（如果merge后的结果放在queue头部，那么需要K-1次调用merge）