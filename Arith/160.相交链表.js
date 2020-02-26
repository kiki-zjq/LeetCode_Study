/** 
 * 2020/02/26
 *
 * 编写一个程序，找到两个单链表相交的起始节点。

 */


 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


 // 方法一：哈希表
var getIntersectionNode = function(headA, headB) {
    let map = new Map();
    let p = headA;
    let q = headB;
    while(p){
        map.set(p);
        p = p.next;
    }
    while(q){
        if(map.has(q))return q
        else
            q = q.next;
    }
    return null;
};