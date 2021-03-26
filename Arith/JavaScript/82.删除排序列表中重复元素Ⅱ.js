/** 
 * 2020/02/22
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

   示例 1:

   输入: 1->2->3->3->4->4->5
   输出: 1->2->5
   示例 2:

   输入: 1->1->1->2->3
   输出: 2->3
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
var deleteDuplicates = function(head) {
    if(head == null){
        return head
    }
    let res = new ListNode(null);
    res.next = head;

    let ptr = res;
    let flag = 0;
    while(head!=null){
        if(head.next!=null){
            if(head.next.val == head.val){
                while(head.next!=null && head.next.val == head.val){
                    head = head.next;
                }
                head = head.next;
                ptr.next = head;
                continue;
            }
            if(head.next.val !== head.val){
                head = head.next;
                ptr = ptr.next;
            }
        }else{
            head = head.next;
        }
    }


    return res.next;
};