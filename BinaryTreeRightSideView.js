// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Example:

// Input: [1,2,3,null,5,null,4]
// Output: [1, 3, 4]
// Explanation:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

var rightSideView = function(root) {
  let stack = [];
  let maxDepth = 0;
  let BFS = (node, currDepth) => {
    if (!node) {
      return;
    }
    if (currDepth > maxDepth) {
      stack.push(node.val);
      maxDepth++;
    }
    BFS(node.right, currDepth + 1);
    BFS(node.left, currDepth + 1);
  };
  BFS(root, 1);
  return stack;
};
