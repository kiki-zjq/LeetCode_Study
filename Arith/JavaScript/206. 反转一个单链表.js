/** 
 * 2020/02/26
 *
 * 反转一个单链表。

    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL

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

// 方法一：数组unshift()方法反转
var reverseList = function(head) {
    let p = head, arr = [];
    while(p){
        arr.unshift(p);
        p = p.next;
    }

    arr.forEach((item,index)=>{
        item.next = arr[index+1] || null
    })

    return arr[0] || head
};


// 方法二：设置一个前驱指针

var reverseList = function(head) {
    if (!head || !head.next) return head;

    let cur = head;
    let pre = null;

    while(cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
};

// 方法三：递归法

var reverseList = function(head) {
    return reverse(null, head);
};

function reverse (prev, curr) {
    if (!curr) return prev;
    // [curr.next, prev, curr] = [prev, curr.next, curr.next];
    let tmp = curr.next;
    curr.next = prev;
    return reverse(curr, tmp);
}
