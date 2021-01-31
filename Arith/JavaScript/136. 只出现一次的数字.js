/** 
 * 2021/02/01
 *
 *  
 * 
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/single-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

var singleNumber = function(nums) {
    var sum1 = 0, sum2=0;
    nums.forEach((num)=>{
        sum1+=num;//2a+b
    })
    nums = [...new Set(nums)]
    nums.forEach((num)=>{
        sum2+=num;//a+b
    })
    return 2*sum2-sum1;
};



// 位运算

// 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
// 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
// XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b


var singleNumber = function(nums) {
    let ans = 0;
    for(const num of nums) {
        ans ^= num;
    }
    return ans;
};


// Map
var singleNumber = function(nums) {
    let map = new Map()
    for (let i=0; i<nums.length; i++) {
       if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i])+1)
        } else {
            map.set(nums[i], 1)
        } 
    }
    for (let item of map.entires()) {
        if (item[1] == 1) {
         	return item[0]   
         }
    }
};
