/** 
 * 2021/01/26
 *
 *  


 */



 
var postorder = function(root) {
  
    const res = []
    function traversal (root) {
      if (root !== null) {
        root.children.forEach(child => traversal(child))
        res.push(root.val)
      }
    }
    traversal(root)
    return res
  };