/** 
 * 2020/02/21
 *
 *  给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。。
    示例 1:

    输入: 1->2->3->4->5->NULL, k = 2
    输出: 4->5->1->2->3->NULL
    解释:
    向右旋转 1 步: 5->1->2->3->4->NULL
    向右旋转 2 步: 4->5->1->2->3->NULL
 
 */



// 1.第一次遍历，记录链表长度l，将最后一个节点和表头链接，形成循环链表；
// 2.k = l - k % l，第二次遍历，从头部向后遍历k个节点，变将第k个节点和后面的节点断开，形成的单向链表即为旋转后的链表。


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
var rotateRight = function(head, k) {
    if (!head || !head.next) {
        return head;
    }

    let currentNode = head;
    let l = 1;
    while (currentNode) {
        currentNode = currentNode.next;
        l++;
        if (!currentNode.next) {
            currentNode.next = head;
            break;
        }
    }
    
    k = l - k % l; //因为输入的k可能长度比l更长
    let i = 0;
    let res;

    while (i++ < k) {
        if (i === k) {
            res = head.next;
            head.next = null;
            break;
        }
        head = head.next;
    }

    return res;
};
