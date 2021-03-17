/** 
 * 2021/03/17
 *
 * 
给你一个整数 n ，如果你可以将 n 表示成若干个不同的三的幂之和，请你返回 true ，否则请返回 false 。

对于一个整数 y ，如果存在整数 x 满足 y == 3x ，我们称这个整数 y 是三的幂。

 

示例 1：

输入：n = 12
输出：true
解释：12 = 31 + 32
示例 2：

输入：n = 91
输出：true
解释：91 = 30 + 32 + 34
示例 3：

输入：n = 21
输出：false
 

 */



/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
	let arr = [];
	for (let i = 0; i <= n; i++) {
		let tmp = Math.pow(3, i);
		if (tmp > n) {
			break;
		}
		arr.push(tmp);
	}
	//console.log(arr);

	let flag = false;
	function dfs(index, total) {
		if (total > n) {
			return;
		}
		if (total == n || flag) {
			flag = true;
			return;
		}
		for (let i = index; i < arr.length; i++) {
			dfs(i + 1, total + arr[i]);
		}
	}
	dfs(0, 0);
	return flag;
};
