class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size==0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }else{
            let curr = this.head;
            let listValues = "";
            while(curr){
                listValues+=`${curr.value} `;
                curr  = curr.next;
            }
            console.log(listValues);
        }
    }

    insert(value , idx){
        if(idx<0 || idx>this.size){
            return null;
        }
        if(idx==0){
            this.prepend(value);
        }else{
            let curr = this.head;
            let prev = null;
            let i =0;
            const node = new Node(value);
            while(curr){
                if(i==idx){
                    prev.next = node ; 
                    node.next = curr;
                    break;
                }
                prev = curr ; 
                curr=curr.next;
                i++;
            }
            this.size++;
        }
    }

    removeFrom(index){
        if(index<0 || index>=this.size){
            return null;
        }
        let removeNode = null; 
        if(index==0){
            removeNode = this.head;
            this.head = this.head.next;
        }else{
            let prev = this.head;
            for(let i=0;i<index-i;i++){
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }
    search(value) {
        if (this.isEmpty()) {
          return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
          if (curr.value === value) {
            return i;
          }
          curr = curr.next;
          i++;
        }
        return -1;
    }
    reverse(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let next = curr.next;
            curr.next=prev;
            prev = curr;
            curr=next;
        }
        this.head = prev;
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
    removeFromEnd() {
        if (this.isEmpty()) {
          return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          let prev = this.head;
          while (prev.next !== this.tail) {
            prev = prev.next;
          }
          prev.next = null;
          this.tail = prev;
        }
        this.size--;
        return value;
    }
}