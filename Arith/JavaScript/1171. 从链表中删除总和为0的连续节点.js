/** 
 * 2021/04/29
 *
 * 

给你一个链表的头节点 head，请你编写代码，反复删去链表中由 总和 值为 0 的连续节点组成的序列，直到不存在这样的序列为止。

删除完毕后，请你返回最终结果链表的头节点。

 

你可以返回任何满足题目要求的答案。

（注意，下面示例中的所有序列，都是对 ListNode 对象序列化的表示。）

示例 1：

输入：head = [1,2,-3,3,1]
输出：[3,1]
提示：答案 [1,2,1] 也是正确的。
示例 2：

输入：head = [1,2,3,-3,4]
输出：[1,2,4]
示例 3：

输入：head = [1,2,3,-3,-2]
输出：[1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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

 // 先转换为数组，然后再转换为链表
var removeZeroSumSublists = function(head) {
    let list = [];
    while(head!=null){
        list.push(head.val);
        head = head.next;
    }
    // 将链表转换成array，然后找到总值为0的序列

    for(let i=0; i<list.length; i++){
        let start = i, end = i;
        if(list[i]==0){
            list.splice(i,1);
            i--;
        }else{
            let sum = 0;
            for(;end<list.length;end++){
                sum += list[end];
                if(sum==0){
                    list.splice(i, end-i+1);
                    i--;
                    break;
                }
            }
        }
    }

    let res = new ListNode(null);
    let ptr = res;
    for(let i=0; i<list.length; i++){
        ptr.next = new ListNode(list[i]);
        ptr = ptr.next;
    }
    return res.next;
};


// 三指针法

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
var removeZeroSumSublists = function(head) {

    let res = new ListNode(0);
    res.next = head;
    let prev = res;
    let ptr1 = head, ptr2 = head;

    while(ptr1!=null){
        // console.log('ptr1:',ptr1);
        // console.log('prev:',prev);
        let flag = 0;
        ptr2 = ptr1;
        if(ptr1.val == 0){
            prev.next = ptr1.next;
            ptr1 = prev;
            ptr1 = ptr1.next;
            continue;
        }else{
            let sum = 0;
            while(ptr2!=null){
                sum += ptr2.val;
                if(sum==0){
                    prev.next = ptr2.next;
                    ptr1 = prev.next;
                    flag = 1;
                    break;
                }
                ptr2 = ptr2.next;
            }
        }
        if(flag == 1){
            continue;
        }
        prev = prev.next;
        ptr1 = ptr1.next;
        // console.log(res.next);
        // console.log('------------');
    }


    return res.next;
};

