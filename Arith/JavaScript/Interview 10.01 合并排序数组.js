/** 
 * 2020/03/03
 *
 * 
    给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

    初始化 A 和 B 的元素数量分别为 m 和 n。

    示例:

    输入:
    A = [1,2,3,0,0,0], m = 3
    B = [2,5,6],       n = 3

    输出: [1,2,2,3,5,6]

 */

 /**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    let len = m+n-1;
    let left = m-1;
    let right =n-1;
    while(left>=0||right>=0){
        if(left<0){
            A[len--]=B[right--];
        }else if(right<0){
            A[len--]=A[left--];
        }else if(A[left]>B[right]){
            A[len--]=A[left--];
        }else{
            A[len--]=B[right--];
        }
        
    }
    
};
