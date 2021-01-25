/** 
 * 2021/01/26
 *
 *  


 */


var preorder = function(root) {
  
    const res = []
    function traversal (root) {
      if (root !== null) {
        res.push(root.val)
        root.children.forEach(child => traversal(child))
      }
    }
    traversal(root)
    return res
  
  };