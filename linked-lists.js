/*https://www.youtube.com/watch?v=Hj_rA0dhr2I
1. a linked list consists of nodes in a certain order
2. current node has a .next property that points to the next node
3. if a node has a .next pointing to null, that's the last node
4.
*/

//traversal

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c
c.next = d

// a  ->  b  ->  c  ->  d  ->  null
// HEAD                TAIL

// const printLinkedList = (head) => {
//   normal print
//   let current = head
//   while (current != null) {
//     console.log(current.val)
//     current = current.next
//   }
// }

const printLinkedList = (head) => {
  //recursive print
  if (head == null) return
  console.log(head.val)
  printLinkedList(head.next)
}

printLinkedList(a)

const reverseLinkedList = (head) => {
  let prev = null
  let current = head
  while (current !== null) {
    let next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}
