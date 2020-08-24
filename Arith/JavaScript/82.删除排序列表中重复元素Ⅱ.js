/** 
 * 2020/02/22
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

   示例 1:

   输入: 1->2->3->3->4->4->5
   输出: 1->2->5
   示例 2:

   输入: 1->1->1->2->3
   输出: 2->3
 */


 //思路使用了一个哈希表
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
var deleteDuplicates = function(head) {
   if(head == null){
       return head
   }
   let map = new Map();
   let now = head;
   while(now != null){
       let count = map.get(now.val);
       if(count){
           map.set(now.val, count+1);
       }else{
           map.set(now.val, 1);
       }
       now = now.next;
   } // 这一步中map包含了所有的val和其出现次数
   let newHead = new ListNode(null);
   let newNow = newHead;
   map.forEach((val,key) => {
       if(val != 1){
           map.delete(key);
       }
   }) // 删除出现次数重复的节点
   let i = 0;
   if(map.size <= 0){
       return null;
   }
   map.forEach((val,key)=>{
       i++;
       newNow.val = key;
       if( i < map.size){
           newNow.next = new ListNode(null);
           newNow = newNow.next
       }
   })
   return newHead;
};

