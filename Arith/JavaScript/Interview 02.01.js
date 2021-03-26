/** 
 * 2021/03/17
 *
 * 
编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

示例1:

 输入：[1, 2, 3, 3, 2, 1]
 输出：[1, 2, 3]
示例2:

 输入：[1, 1, 1, 1, 2]
 输出：[1, 2]
提示：

链表长度在[0, 20000]范围内。
链表元素在[0, 20000]范围内。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicate-node-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 

 */



const removeDuplicateNodes = (head) => {
    if (head == null) {
      return head;
    }
    const set = new Set();
    set.add(head.val);  
  
    let prev = head;     // head是存在的，赋给prev
    let cur = head.next; // head是存在的，它的next赋给cur
  
    while (cur) {
      if (set.has(cur.val)) { // 如果当前节点是重复的
        prev.next = cur.next; // 让prev的next直接指向cur的next，完成删除
        cur = cur.next;       // 更新一下cur
      } else {
        set.add(cur.val);     // 当前节点是第一次出现，存储一下
        prev = prev.next;     // prev和cur都更新一下，跳到下一个
        cur = cur.next;
      }
    }
    return head; // 返回删除重复节点后的链表
  };
  