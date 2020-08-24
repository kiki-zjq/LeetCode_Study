/** 
 * 2020/02/20
 *
 * 删除链表倒数第n个节点：
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


var removeNthFromEnd = function(head, n) {
    let left = head;
    let right = head;
    let i = 0;

    while (i++ < n) {
        right = right.next; //这一步之后，相当于right指针领先了left指针n个位置。
    }                       //接下来，只需要一起移动两个指针，当right.next==null时，
                            //left.next指向的就是链表的倒数第n个。

    if (!right) {
        return head.next;
    }

    while (right.next) {
        left = left.next;
        right = right.next;
    }

    const oldNext = left.next;
    left.next = left.next.next;
    oldNext.next = null;
    return head;
};


// 下面这种相当于将节点全部放到一个数组里，然后直接从数组里面去除（非常直观）

var removeNthFromEnd = function(head, n) {
    if (!head || !n) {
      return head
    }
    let res = []
    let p = head
    while(p) {
      res.push(p)
      p = p.next
    }
    let len = res.length
    if (n >= len) {
      if (n === len) {
        return head.next
      }
      return head
    }
    res[len - n - 1].next = res[len - n].next
  
    return res[0]
  };
  
  