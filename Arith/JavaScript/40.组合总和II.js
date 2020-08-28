/** 
 * 2020/08/29
 *
 *  

给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 



 */

 //这一题解法和39题差不多，只不过每个数字只能用一次，所以修改了递归的参数

 /**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let n = candidates.length;
    let res = [];
    let tmpPath = [];
    candidates = candidates.sort((a,b) => {return a - b})
    let backtrack = (tmpPath,target,start) => {
        if(target == 0){
            res.push(tmpPath);
            return;
        }
        for(let i = start;i < n;i++){
            if(target < candidates[i]) break;
            if(i > start && candidates[i-1] == candidates[i]) continue;
            tmpPath.push(candidates[i]);
            backtrack(tmpPath.slice(),target - candidates[i],i + 1);
            tmpPath.pop();
        }
    }
    backtrack(tmpPath,target,0);
    return res;
};


