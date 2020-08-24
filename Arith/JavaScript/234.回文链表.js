/** 
 * 2020/02/26
 *
 * 
    请判断一个链表是否为回文链表。

    示例 1:

    输入: 1->2
    输出: false
    示例 2:

    输入: 1->2->2->1
    输出: true

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
 * @return {boolean}
 */

// 方法一：变成数组 对比arr和arr.reverse
 var isPalindrome = function(head) {
    let arr=[]
    while (head!=null){
        arr.push(head.val)
        head=head.next
    }
    if(JSON.stringify(arr)===JSON.stringify(arr.reverse())){
        return true
    }else{
        return false
    }
};

// 方法二：快慢指针

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let prev = null;
    let nextTmp;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        nextTmp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextTmp;
    }
    if (fast !== null) slow = slow.next; // 奇数
    while (slow !== null) {
        if (prev.val !== slow.val) return false;
        slow = slow.next;
        prev = prev.next;
    }
    return true;
};
