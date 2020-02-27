/** 
 * 2020/02/26
 *
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

    请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

    示例 1:

    输入: 1->2->3->4->5->NULL
    输出: 1->3->5->2->4->NULL

    示例 2:

    输入: 2->1->3->5->6->4->7->NULL 
    输出: 2->3->6->7->1->5->4->NULL
    说明:

    应当保持奇数节点和偶数节点的相对顺序。
    链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
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
var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) return head;
    
    let order = head,
        next = order.next,
        curr = next.next;
    
    while (curr) {
      let nextSingle = curr.next;
      curr.next = order.next;
      next.next = nextSingle;
      order.next = curr;
      
      if (!nextSingle || !nextSingle.next) break;
      order = order.next;
      curr = nextSingle.next;
      next = nextSingle;
    }
    
    return head;
  };
  

  
  
var oddEvenList = function(head) {
    if (!head || !head.next || !head.next.next) return head;
    
    let p = head;
    let odd = new ListNode(null);
    let even = new ListNode(null);
    let oddHead = odd;
    let evenHead = even;
    let flag = 0;
    while (p) {
  
        if(flag){
            flag = 0;
            even.next = p;
            even = even.next;
          
        }else{
            flag = 1;
            odd.next = p;
            odd = odd.next;
            
        }
  
        p = p.next;
    }
  
    even.next = null;
    odd.next = evenHead.next;
    return oddHead.next;
  };
  
  