
// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true 
// if the tree has a root-to-leaf path such that adding up all the values 
// along the path equals targetSum.

var root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if(root==null){
      return false
  }

  if(root.left==null && root.right==null){
      return root.val==targetSum
  }

  let remainingSum = targetSum-root.val;

  return hasPathSum(root.left,remainingSum)|| hasPathSum(root.right,remainingSum)
};

console.log(hasPathSum(root,targetSum))