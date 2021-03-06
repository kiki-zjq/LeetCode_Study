/** 
 * 2021/03/06
 *
 *  
 
给你无向 连通 图中一个节点的引用，请你返回该图的 深拷贝（克隆）。

图中的每个节点都包含它的值 val（int） 和其邻居的列表（list[Node]）。

class Node {
    public int val;
    public List<Node> neighbors;
}
 

测试用例格式：

简单起见，每个节点的值都和它的索引相同。例如，第一个节点值为 1（val = 1），第二个节点值为 2（val = 2），以此类推。该图在测试用例中使用邻接列表表示。

邻接列表 是用于表示有限图的无序列表的集合。每个列表都描述了图中节点的邻居集。

给定节点将始终是图中的第一个节点（值为 1）。你必须将 给定节点的拷贝 作为对克隆图的引用返回。

 

示例 1：



输入：adjList = [[2,4],[1,3],[2,4],[1,3]]
输出：[[2,4],[1,3],[2,4],[1,3]]
解释：
图中有 4 个节点。
节点 1 的值是 1，它有两个邻居：节点 2 和 4 。
节点 2 的值是 2，它有两个邻居：节点 1 和 3 。
节点 3 的值是 3，它有两个邻居：节点 2 和 4 。
节点 4 的值是 4，它有两个邻居：节点 1 和 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/clone-graph
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */



 /**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */




 /**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

const cloneGraph = (startNode) => {
    if (startNode == null) return null;
    const visited = new Map();
  
    const queue = [];
    queue.push(startNode);
  
    const clonedStartNode = new Node(startNode.val, []);
    visited.set(startNode.val, clonedStartNode);
  
    while (queue.length) {
      const curNode = queue.shift();           
      
      for (const neighborNode of curNode.neighbors) {
        if (!visited.has(neighborNode.val)) {      
          queue.push(neighborNode);                
          const clonedNeighborNode = new Node(neighborNode.val, []); 
          visited.set(neighborNode.val, clonedNeighborNode); 
        }
        const curClonedNode = visited.get(curNode.val);      
        const clonedNeighborNode = visited.get(neighborNode.val); 
        curClonedNode.neighbors.push(clonedNeighborNode);   
      }
    }
  
    return clonedStartNode;
  };
  
  