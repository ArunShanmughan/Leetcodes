
// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.


//  Definition for singly-linked list.
  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
  }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  function rev(head) {
      if(!head){
          return head
      }
      if(!head.next){
          return head
      }

      let curr = rev(head.next)
      if (head.next) {
          head.next.next = head
          head.next = null
      }
      return curr
  }
  return rev(head)
};

console.log(reverseList([1,2,3,4,5]))