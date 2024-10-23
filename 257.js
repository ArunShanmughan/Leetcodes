
// 257. Binary Tree Paths

// Given the root of a binary tree, return all root-to-leaf paths in any order.

// A leaf is a node with no children.

var root = [1,2,3,null,5];

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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const paths = [];
  console.log(root.val)
  const dfs = (node, path) => {
      if (!node) return;
      path += node.val;
      if (!node.left && !node.right) {
          paths.push(path);
      } else {
          path += "->";
          dfs(node.left, path);
          dfs(node.right, path);
      }
  };

  dfs(root, "");
  return paths;
};

console.log(binaryTreePaths(root))