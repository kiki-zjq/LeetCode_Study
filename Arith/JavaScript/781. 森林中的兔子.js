/** 
 * 2021/04/04
 *
 *  森林中，每个兔子都有颜色。其中一些兔子（可能是全部）告诉你还有多少其他的兔子和自己有相同的颜色。我们将这些回答放在 answers 数组里。

返回森林中兔子的最少数量。

示例:
输入: answers = [1, 1, 2]
输出: 5
解释:
两只回答了 "1" 的兔子可能有相同的颜色，设为红色。
之后回答了 "2" 的兔子不会是红色，否则他们的回答会相互矛盾。
设回答了 "2" 的兔子为蓝色。
此外，森林中还应有另外 2 只蓝色兔子的回答没有包含在数组中。
因此森林中兔子的最少数量是 5: 3 只回答的和 2 只没有回答的。

输入: answers = [10, 10, 10]
输出: 11

输入: answers = []
输出: 0

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rabbits-in-forest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


 /**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    if(answers.length==0)return 0;
    let map = new Map();
    for(let ans of answers){
        if(map.has(ans)){
            map.set(ans, map.get(ans)+1);
        }else{
            map.set(ans, 1);
        }
    }

    let res = 0;
    for(let [key, value] of map.entries()){
        res += Math.ceil(value / (key+1)) * (key+1);
    }

    return res;
};