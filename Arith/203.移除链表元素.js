/** 
 * 2020/02/26
 *
 * 删除链表中等于给定值 val 的所有节点。

    示例:

    输入: 1->2->6->3->4->5->6, val = 6
    输出: 1->2->3->4->5

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
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function(head, val) {
    let newHead = new ListNode( null ),
        prev = newHead,
        curr = head;
    newHead.next = head;
    
    while (curr) {
      if (curr.val === val) {
        prev.next = curr.next;
        curr = prev.next;
      }
      else {
        prev = curr;
        curr = curr.next;
      }
    }
    
    return newHead.next;
  };

  

  var removeElements = function(head, val) {
    if(!head) return null;
    
    let current = head;
    let previous = null;

    while(current){
        if(current.val === val){
            if(previous){
                previous.next = current.next;
            }else{
                head = current.next;
            }
        }else{
            previous = current;
        }
        current = current.next;
    }

    return head;
};