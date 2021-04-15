/** 
 * 2021/04/15
 *
 *  
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 

进阶：

如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

 

示例：

输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 8 -> 0 -> 7

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers-ii
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    while(l1){
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2){
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let resStack = [];
    let val = 0, params = 0;
    while(stack1.length!=0 || stack2.length!=0){
        let x = stack1.length==0?0:stack1.pop();
        let y = stack2.length==0?0:stack2.pop();
        val = x+y+params;
        params = Math.floor(val/10);
        resStack.push(val%10);
    }
    if(params==1)resStack.push(1);

    let head = new ListNode(0), ptr = head;
    while(resStack.length!=0){
        val = resStack.pop();
        ptr.next = new ListNode(val);
        ptr = ptr.next;   
    }

    return head.next;
};


