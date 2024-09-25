
// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that 
// each element appears only once. Return the linked list sorted as well.

var head = [1,1,2,3,3];


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let curr = head;

  while(curr!=null&&curr.next!=null){
      if(curr.val==curr.next.val){
          curr.next = curr.next.next
      }else{
          curr = curr.next
      }
  }
  return head
};

console.log(deleteDuplicates(head))