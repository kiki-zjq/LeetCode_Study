/** 
 * 2020/02/26
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

    k 是一个正整数，它的值小于或等于链表的长度。

    如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

    示例 :

    给定这个链表：1->2->3->4->5

    当 k = 2 时，应当返回: 2->1->4->3->5

    当 k = 3 时，应当返回: 3->2->1->4->5

    说明 :

    你的算法只能使用常数的额外空间。
    你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

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
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = function(head, k) {
    let p = head, arr = [], resultArr = [], index = 0
    if (k < 2) {
        return head
    }
    while (p) {
        arr.unshift(p)
        p = p.next
        if (++index === k) {
            resultArr = resultArr.concat(arr)
            index = 0
            arr = []
        } else if (!p) { // 说明此时是最后一组，应该不反转
            resultArr = resultArr.concat(arr.reverse())
        }
    }
    resultArr.forEach((item, index) => {
        item.next = resultArr[index+1] || null
    })
    return resultArr[0] || head
}
