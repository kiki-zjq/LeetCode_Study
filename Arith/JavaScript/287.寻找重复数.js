/** 
 * 2021/01/31
 *
 *  
 * 
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。

 

示例 1：

输入：nums = [1,3,4,2,2]
输出：2
示例 2：

输入：nums = [3,1,3,4,2]
输出：3
示例 3：

输入：nums = [1,1]
输出：1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-the-duplicate-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


// 方法1 设置map

var findDuplicate = function(nums) {
    const map = new Map();
    var res=0;
    nums.forEach((num)=>{
        if(map.has(num)){
            res = num
        }
        else map.set(num,1) 
    })
    return res
};

// 方法2 快慢指针
const findDuplicate = (nums) => {
    let slow = 0;
    let fast = 0;
    while (true) {
      slow = nums[slow];  
      fast = nums[nums[fast]]; // slow跳一步，fast跳两步
      if (slow == fast) {      // 指针首次相遇
        fast = 0;              // 让快指针回到起点
        while (true) {         // 开启新的循环
          if (slow == fast) {  // 如果再次相遇，就肯定是在入口处
            return slow;       // 返回入口，即重复的数
          }
          slow = nums[slow];   // 两个指针每次都进1步
          fast = nums[fast];
        }
      }
    }
  };
  