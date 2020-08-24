/** 
 * 2020/02/22
 *
 * 给定一个链表，判断链表中是否有环。

    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

     

    示例 1：

    输入：head = [3,2,0,-4], pos = 1
    输出：true
    解释：链表中有一个环，其尾部连接到第二个节点。

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
var hasCycle = function(head) {
    let p1 = head, p2 = head
    if (!head) {
        return false
    }
    while (true) {
        p1 = p1 ? p1.next : null
        p2 = p2 ? p2.next : null
        if (!p2) {
            return false
        } else {
            p2 = p2.next
        }
        if ((p2 === p1) && (p1 !== null)) {
            return true
        }
    }
}

// 上面的思路相当于是两个指针赛跑。每次循环，p2都会移动两步，p1都会移动一步
// 如果是一个环形链表，那么p2就会追上p1.


// 第二个思路是用set当成一个hash表，如果set中元素的数目和目前经过的节点数目不同，那么就代表环形了。

var hasCycle = function(head) {
    
    if (!head) {
        return false
    }
    let count = 0;
    let set = new Set();
    while (head.next!=null) {
        set.add(head)
        count +=1
        if(set.size!=count)return true

        head = head.next
    }
    return false;
}

// 也可以直接使用map

var hasCycle = function(head) {
    const map = new Map();
    while(head != null) {
        if (map.get(head) === undefined) {
            map.set(head, head.val);
            head = head.next;
        } else {
            return true;
        }
    }
    return false;
};