// driver Harprit
// navigator Jordan-Huitema

// To-do-list

class Node {
    constructor(entry){
    this.data = entry;
    this.next = null;
    }
}

class Todolist{
    constructor() {
        this.head = null;
        this.tail = null; 
        this.length = 0;
    } 
    // adds newNode
    // checks if head contains node 
    // add newnodes to end of list
    // sets tails as a lastnode
    add (data){
        var newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this;
    }
    // removes firstnode
    // checks if head contains node || head as next node
    // clones list
    // removes the first node
    // sets secondnode as a head
    // returns changed list 
    shift() {
        if (!this.head || !this.head.next){
            return undefined;
        
        }
        var current = this.head;
        current = current.next;
        this.head = current;
    }
    // moves first node to the end
    //checks if head contains node || if head is tail
    // adds head to end of list
    // removes head
    moveend(){
        if(!this.head && this.head === this.tail)
        {
            return undefined;
        }
      this.add(this.head.data)
      this.shift()
    }
}


let list = new Todolist();

console.log(list);
list.add("nmit")
list.add("cow")
list.add("calf")
list.add("svpv")
list.add("lion")

console.log(list);
list.shift()
console.log(list);
list.moveend()
console.log(list);