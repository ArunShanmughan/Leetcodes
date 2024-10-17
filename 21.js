
// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

var list1 = [1,2,4], list2 = [1,3,4];

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let node = new ListNode()
  let curr = node
  while (list1 != null && list2 != null) {
      if (list1.val < list2.val) {
          node.next = list1
          list1 = list1.next
      } else {
          node.next = list2
          list2 = list2.next
      }
      node = node.next
  }
  if (list1 != null) {
      node.next = list1
  } else if (list2 != null) {
      node.next = list2
  }
  return curr.next
};

console.log(mergeTwoLists(list1,list2))