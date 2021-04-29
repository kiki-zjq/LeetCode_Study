/** 
 * 2021/04/29
 *
 * 

给你链表的头节点 head 和一个整数 k 。

交换 链表正数第 k 个节点和倒数第 k 个节点的值后，返回链表的头节点（链表 从 1 开始索引）。

 

示例 1：


输入：head = [1,2,3,4,5], k = 2
输出：[1,4,3,2,5]
示例 2：

输入：head = [7,9,6,6,7,8,3,0,9,5], k = 5
输出：[7,9,6,6,8,7,3,0,9,5]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/swapping-nodes-in-a-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let res = new ListNode(0);
    res.next = head;

    let firstK = res;
    for(let i=k; i>0; i--){
        firstK = firstK.next;
    }
    let lastK = kthToLast(head, k);
    [firstK.val, lastK.val] = [lastK.val, firstK.val];
    return res.next;
};

var kthToLast = function(head, k) {
    let pre = new ListNode(0);
    pre.next = head;
    let fast = pre, slow = pre;

    while(k>0){
        fast = fast.next;
        k--;
    }

    while(fast!=null){
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};