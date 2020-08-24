/** 
 * 2020/02/22
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

    你应当保留两个分区中每个节点的初始相对位置。

    示例:

    输入: head = 1->4->3->2->5->2, x = 3
    输出: 1->2->2->4->3->5

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head == null)return head;
    let node = new ListNode(null);
    var returnNode = node;
    var now = head;
    while(now!=null){
        if(now.val<x){
            node.next = new ListNode(now.val);
            node = node.next;
            console.log(returnNode);
        }
        now = now.next;
    }
    
    now = head;
    while(now!=null){
        if(now.val>=x){
            node.next = new ListNode(now.val);
            node = node.next;
        }
        now = now.next;
    }

    return returnNode.next;

};

// 上面是很直观的思路，就是遍历两次，但是性能问题很严重。

// 遍历链表存成两个数组，再把数组拼接起来成为一个大数组，再遍历一次这个数组形成新链表，时间复杂度为O(n)

var partition = function(head, x) {
    let arr = [], arrBigger = [], pointer = head, idx = 0
    while (pointer) {
        if (pointer.val < x) {
            arr.push(pointer)
        } else {
            arrBigger.push(pointer)
        }
        pointer = pointer.next
    }
    let result = arr.concat(arrBigger)
    result.forEach((node, index) => {
        node.next = result[index+1] || null
    })
    return result[0] || head
}