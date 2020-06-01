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
    shift() {
        if (!this.head || !this.head.next){
            return undefined;
        
        }
        var current = this.head;
        current = current.next;
        this.head = current;
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