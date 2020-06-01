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
    shift() {
        if (!this.head || !this.head.next){
            return undefined;
        
        }
        var current = this.head;
        current = current.next;
        this.head = current;
    }
    // moves first node to the end
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