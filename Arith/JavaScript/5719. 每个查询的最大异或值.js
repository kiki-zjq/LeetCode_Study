/** 
 * 2021/04/18
 *
 *  
给你一个 有序 数组 nums ，它由 n 个非负整数组成，同时给你一个整数 maximumBit 。你需要执行以下查询 n 次：

找到一个非负整数 k < 2maximumBit ，使得 nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k 的结果 最大化 。k 是第 i 个查询的答案。
从当前数组 nums 删除 最后 一个元素。
请你返回一个数组 answer ，其中 answer[i]是第 i 个查询的结果。

 

示例 1：

输入：nums = [0,1,1,3], maximumBit = 2
输出：[0,3,2,3]
解释：查询的答案如下：
第一个查询：nums = [0,1,1,3]，k = 0，因为 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3 。
第二个查询：nums = [0,1,1]，k = 3，因为 0 XOR 1 XOR 1 XOR 3 = 3 。
第三个查询：nums = [0,1]，k = 2，因为 0 XOR 1 XOR 2 = 3 。
第四个查询：nums = [0]，k = 3，因为 0 XOR 3 = 3 。
示例 2：

输入：nums = [2,3,4,7], maximumBit = 3
输出：[5,2,6,5]
解释：查询的答案如下：
第一个查询：nums = [2,3,4,7]，k = 5，因为 2 XOR 3 XOR 4 XOR 7 XOR 5 = 7。
第二个查询：nums = [2,3,4]，k = 2，因为 2 XOR 3 XOR 4 XOR 2 = 7 。
第三个查询：nums = [2,3]，k = 6，因为 2 XOR 3 XOR 6 = 7 。
第四个查询：nums = [2]，k = 5，因为 2 XOR 5 = 7 。
示例 3：

输入：nums = [0,1,2,2,5,7], maximumBit = 3
输出：[4,3,6,4,6,7]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-xor-for-each-query
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */




/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let res = new Array(nums.length).fill(0);
    let len = nums.length;
    let map = [];
    map[0] = nums[0];
    
    nums.forEach((num,index)=>{
        if(index!=0){
            map.push(map[index-1]^num)
        }
    })
    
    for(var i=0; i<len; i++){
        findK(map, maximumBit, len, i, res); 
        nums.pop();
    }
    
    return res;
};

var findK = function(map, maximumBit, len, i, res){
    let val = map[len - i - 1];
    let val2 = parseInt(val).toString(2) + '';
    val2 = val2.split('');
    let len2 = val2.length;
    let target = [];
    let t=1;
    
    for(let j=maximumBit-1;j>=0;j--){
        if(val2[len2-t]=='1'){
            target[j] = '0';
        }else{
            target[j] = '1';
        }
        t++;
    }
    let val3 = target.join('');
    if(maximumBit>len2){
        val3 = val3.padStart(maximumBit,1)
    }
    res[i] = parseInt(val3, 2);
}

