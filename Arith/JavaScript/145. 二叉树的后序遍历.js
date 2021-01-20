/** 
 * 2021/01/21
 *
 *  



 */

var postorderTraversal = function(root) {
    const res = [];
    const postOrder = (root) => {
      if (root == null) return;
      postOrder(root.left);
      postOrder(root.right);
      res.push(root.val);
    };
    postOrder(root);
    return res;
};