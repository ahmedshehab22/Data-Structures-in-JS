class Queue{
    constructor(){
        this._storage={}
        this._front=0;
        this._back=0;
        this._size=0;
    }
    enqueue(value){
        if(this._back===this._front){
            this._back=this._front=0;
        }
        this._storage[this._back]=value;
        this._back++;
        this._size++;
    }
    dequeue(){
        let res = undefined
        if(this._front<this._back){
            res = this._storage[this._front];
            delete this._storage[this._front];
            this._front++;
            this._size--;
        }
        return res;
    }
    peek(){
        let res = undefined
        if(this._front<this._back){
            res = this._storage[this._front];
        }
        return res;
    }
    is_empty(){
        return this._back===this._front;
    }
    size(){
        return this._size;
    }
}