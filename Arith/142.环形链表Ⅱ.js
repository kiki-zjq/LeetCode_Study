/** 
 * 2020/02/23
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

    为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

    说明：不允许修改给定的链表。

     

    示例 1：

    输入：head = [3,2,0,-4], pos = 1
    输出：tail connects to node index 1
    解释：链表中有一个环，其尾部连接到第二个节点。

 */


var detectCycle = function(head) {
    
    if (!head) {
        return null
    }
    let node = head;
    let set = new Set();
    while (head.next!=null) {
        if(set.has(head)){
            
            while(node != head){
                node = node.next;
            }
            return node;

        }
        set.add(head)
        head = head.next
    }
    return null;

};


var detectCycle = function(head) {
    let dataMap = new Map()
   while (head) {
     if (dataMap.has(head)) {
       return head
     }
     dataMap.set(head, 1)
     head = head.next
   }
   return null 
 };