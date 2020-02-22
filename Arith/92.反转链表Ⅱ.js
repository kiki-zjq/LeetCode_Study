/** 
 * 2020/02/22
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

    说明:
    1 ≤ m ≤ n ≤ 链表长度。

    示例:

    输入: 1->2->3->4->5->NULL, m = 2, n = 4
    输出: 1->4->3->2->5->NULL

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

// 思路是创建一个数组，然后调整数组内节点的位置
// 需要反转的节点即从本身的index 变到 m+n-2-index 的位置

var reverseBetween = function(head, m, n) {
    let arr = [];
    let pointer = head;

    while(pointer){
        arr.push(pointer);
        pointer = pointer.next;
    }


    arr.forEach((node,index)=>{
        if(m-1<=index && index<= Math.floor((m+n-2)/2)){
            [arr[index],arr[m+n-2-index]] = [arr[m+n-2-index],arr[index]]
        }
    })

    arr.forEach((node,index)=>{
        node.next = arr[index+1]||null;
    })

    return arr[0]||head

};


var reverseBetween = function(head, m, n) {
    if (m == n || head.next == null) return head
    let dummy = new ListNode(-1)
    dummy.next = head
    let node = dummy
    let count = 1
    while (count < m) {
      node = node.next
      count++
    }
    let revNode = node.next
    let lastNode = node.next
    node.next = null
    while (count >= m && count <= n) {
      let sub_node = revNode
      let temp = node.next
      revNode = revNode.next
      node.next = sub_node
      sub_node.next = temp
      if (count == n) {
        lastNode.next = revNode
        break
      }
      count++
    }
    return dummy.next
  }