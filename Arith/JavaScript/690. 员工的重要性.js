/** 
 * 2021/03/06
 *
 *  
 * 给定一个保存员工信息的数据结构，它包含了员工唯一的id，重要度 和 直系下属的id。

比如，员工1是员工2的领导，员工2是员工3的领导。他们相应的重要度为15, 10, 5。那么员工1的数据结构是[1, 15, [2]]，员工2的数据结构是[2, 10, [3]]，员工3的数据结构是[3, 5, []]。注意虽然员工3也是员工1的一个下属，但是由于并不是直系下属，因此没有体现在员工1的数据结构中。

现在输入一个公司的所有员工信息，以及单个员工id，返回这个员工和他所有下属的重要度之和。

示例 1:

输入: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
输出: 11
解释:
员工1自身的重要度是5，他有两个直系下属2和3，而且2和3的重要度均为3。因此员工1的总重要度是 5 + 3 + 3 = 11。
注意:

一个员工最多有一个直系领导，但是可以有多个直系下属
员工数量不超过2000。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/employee-importance
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
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */

const GetImportance = (employees, id) => {
    // 1. 设置 importanceSum 来获取最终值
    let importanceSum = 0;
  
    // 2. 遍历员工表
    for (let i = 0; i < employees.length; i++) {
      // 2.1 找到那只员工，分析它！
      if (employees[i].id === id) {
        // 2.2 设置当前领导层
        let bfs = [i];
  
        // 2.3 如果还能找到下属，则不停查找
        while (bfs.length) {
          
          // 2.3.1 设置下属列表为空
          let tempBfs = [];
  
          // 2.3.2 遍历当前的领导层，查找它们的下属
          for (let i = 0; i < bfs.length; i++) {
            // 2.3.3 解构当前领导信息
            const { id, importance, subordinates } = employees[bfs[i]];
  
            // 2.3.4 收集它的重要性
            importanceSum += importance;
  
            // 2.3.5 查找它们的下属
            if (subordinates.length) {
              for (let j = 0; j < subordinates.length; j++) {
                for (let k = 0; k < employees.length; k++) {
                  if (employees[k].id === subordinates[j]) {
                    tempBfs.push(k);
                  }
                }
              }
            }
          }
  
          // 2.3.6 更新下一次需要遍历的领导层
          bfs = tempBfs;
        }
      }
    }
  
    // 4. 返回最终结果
    return importanceSum;
  };
  