/** 
 * 2020/08/28
 *
 *  

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]


 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    if(nums.length==1 && nums[0]==target){
        return [0,0]
    }
    
    while(start<=end){
        let mid  = Math.ceil((start+end)/2);
        
        if(nums[mid]===target){
            
            let [ret1,ret2,temp]=[mid,mid,mid]
            while(nums[mid]===nums[--mid])ret1=mid
            while(nums[temp]===nums[++temp])ret2=temp
            return[ret1,ret2]
        }

        if(nums[mid]<target){
            //结果在mid到end之间
            start=mid+1;
            continue
        }
        if(nums[mid]>target){
            //结果在start到mid之间
            end=mid-1;
            continue
        }
    }
    return [-1,-1]
};