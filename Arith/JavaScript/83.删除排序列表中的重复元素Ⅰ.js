/** 
 * 2020/02/22
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

    示例 1:

    输入: 1->1->2
    输出: 1->2

    示例 2:

    输入: 1->1->2->3->3
    输出: 1->2->3
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
 * @return {ListNode}
 */

// 第一种思路思路是递归法，如果遇到了重复的val，则返回下一个节点

 var deleteDuplicates = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    if (head.val == head.next.val) {
        head.next = deleteDuplicates(head.next)
        return head.next
    } else {
        head.next = deleteDuplicates(head.next)
        return head
    }
};



var deleteDuplicates = function(head) {
    var cur = head;
    while(cur && cur.next) {
        if(cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

