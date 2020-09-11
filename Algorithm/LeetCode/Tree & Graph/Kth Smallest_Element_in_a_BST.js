// Kth Smallest Element in a BST
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/790/

var kthSmallest = function (root, k) {
  // 이진 트리!!!
  let node = root;
  let stack = [];
  let current;
  let right;

  while (node) {
    stack.push(node);
    node = node.left;
  }

  while (k) {
    k--;
    current = stack.pop();
    // kth element
    if (k === 0 && current) {
      return current.val;
      right = current.right;
    }
    while (right) {
      stack.push(right);
      right = right.left;
    }
  }
};
