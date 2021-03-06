/** 
 * 2021/03/28
 *
 *  
在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：

行数 m 应当等于给定二叉树的高度。
列数 n 应当总是奇数。
根节点的值（以字符串格式给出）应当放在可放置的第一行正中间。根节点所在的行与列会将剩余空间划分为两部分（左下部分和右下部分）。你应该将左子树输出在左下部分，右子树输出在右下部分。左下和右下部分应当有相同的大小。即使一个子树为空而另一个非空，你不需要为空的子树输出任何东西，但仍需要为另一个子树留出足够的空间。然而，如果两个子树都为空则不需要为它们留出任何空间。
每个未使用的空间应包含一个空的字符串""。
使用相同的规则输出子树。
示例 1:

输入:
     1
    /
   2
输出:
[["", "1", ""],
 ["2", "", ""]]
示例 2:

输入:
     1
    / \
   2   3
    \
     4
输出:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]
示例 3:

输入:
      1
     / \
    2   5
   / 
  3 
 / 
4 
输出:
[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/print-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */




var printTree = function(root) {
    let row = getDepth(root);
    let col = Math.pow(2, row) - 1;
    let arr = Array.from(new Array(row), () => new Array(col).fill(""));
    printSingleRow(arr, root, 0, 0, col);
    return arr;
};

function getDepth(root) {
    if(!root) return 0;
    let leftDph = getDepth(root.left);
    let rightDph = getDepth(root.right);
    return leftDph > rightDph ? leftDph + 1 : rightDph + 1;
}

function printSingleRow(arr, root, row, left, right) {
    if(root) {
        let mid = Math.floor((left + right) / 2);
        arr[row][mid] = String(root.val);
        printSingleRow(arr, root.left, row + 1, left, mid);
        printSingleRow(arr, root.right, row + 1, mid + 1, right);
    }
}
