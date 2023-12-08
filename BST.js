class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root==null;
    }

    insert(value){
        const newNode = new Node(value);
        console.log(newNode)
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root,newNode);
        }
    }
    insertNode(root , newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode);
            }
        }else{
            if(root.right==null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode);
            }
        }
    }
    search( value , root=this.root ){
        if(!root){
            return false;
        }
        if(root.value==value)
            return true;
        if(value<root.value){
            return this.search(value,root.left);
        }else{
            return this.search(value,root.right)
        }
    }

    preOrder(root=this.root){
        if(!root)
            return;
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
    inOrder(root=this.root){
        if(!root)
            return;
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }

    postOrder(root=this.root){
        if(!root)
            return;
        this.postOrder(root.left);
        this.postOrder(root.right); 
        console.log(root.value);
        
    }
}

let res=new Array(10000)
res[32]+=1;
console.log(res)
