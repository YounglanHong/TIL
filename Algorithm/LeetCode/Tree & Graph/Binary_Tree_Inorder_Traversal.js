// Binary Tree Inorder Traversal
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/786/

var inorderTraversal = function (root) {
  let stack = [];
  let result = [];
  let node = root; // 타겟인 노드

  /*    1      
         /     \
       null     2 
               /
              3 
      */
  while (node || stack.length) {
    // 왼쪽 => 오른쪽 탐색
    if (node) {
      stack.push(node);
      node = node.left;
      // 노드 값이 null이 되면 결과값으로 push
    } else {
      node = stack.pop();
      result.push(node.val);
      node = node.right;
    }
  }
  return result;
};
