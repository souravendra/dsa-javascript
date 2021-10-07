// https://www.youtube.com/watch?v=ZBdE8DElQQU

// simple example:
/*
const n1 = {
    data: 100
}

const n2 = {
    data: 200
};

n1.next = n2;

console.log(n1);
*/

//Node constructor:

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const n1 = new Node(100, 123);
//console.log(n1)

//Linked List constructor

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert first node (head)
    insertFirst(data) {
        this.head = new Node(data, this.head); //sets node as the new head, and sets previous head as this.next
    }

    //Insert last node

    //Insert at an index

    //Get at index

    //Remove at index

    //Clear list

    //Print list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300)

// console.log(ll)

ll.printListData();