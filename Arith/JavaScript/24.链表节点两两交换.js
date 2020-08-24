/** 
 * 2020/02/21
 *
 *  给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

    你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

    示例:

    给定 1->2->3->4, 你应该返回 2->1->4->3.
 
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 1. 迭代法：
// 时间: O(n). 推进遍历整个链表故O(n).
// 空间: O(1). 使用常量级空间.

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 1. 确认 head 大于等于两个，否则返回;
    if (!head || !head.next) return head;
    // 2. 新建链表哨兵头并创建指针curr；
    let res = new ListNode(null);
    res.next = head;
    let prev = res;
    // 3. 循环开始
    //    3.1 走两步，存为fst, snd;
    //    3.2 哨兵->snd, fst->snd.next, snd->fst;
    //    3.3 推进 curr = curr.next.next;
    while (prev.next && prev.next.next) {
        let [fst, snd] = [prev.next, prev.next.next];
        [prev.next, fst.next, snd.next] = [snd, snd.next, fst];
        prev = prev.next.next;
    }
    // 4. 返回res.next;
    return res.next;
};


// 2.递归法
//
// 时间: O(n). 从最底层两个互换到最高层，每层时间复杂度均为O(1), 共 n/2 层故时间复杂度为 O(n/2).
// 空间: O(n). 共 n/2 层递归调用栈， 故空间复杂度为 O(n/2).

var swapPairs = function(head) {
    // 自递归思路：
    //    1. 确认head大于等于两个，否则返回
    if (!head || !head.next) return head; 
    //    2. 获得第二个节点;
    let next = head.next;
    //    3. 第一个节点指向第三个节点, 传入第三个节点开始递归，获得已排序的链表；
    head.next = swapPairs(next.next);
    //    4. 第二个节点指向第一个节点
    next.next = head;
    //    5. 返回第二个节点；
    return next;
};
