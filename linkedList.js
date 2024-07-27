  class Node{

    constructor(data){
        this.data=data;
        this.next=null;
    
    }
    
    }



 class LinkedList {

constructor(){

this.linkedlist=null;

}

append(value) { // ajouter un noeud a la fin

let newNode= new Node(value);

// Si il n'y a pas de node au debut
if(!this.linkedlist) {this.linkedlist=newNode; return }

// Si il y a un node au debut 

let currentNode=this.linkedlist;

while(currentNode.next)// Pour rechercher la fin de la liste
{

currentNode=currentNode.next

}

currentNode.next=newNode;

}

prepend(value)// Ajout d'un noeud au debut
{
let newNode=new Node(value);

newNode.next=this.linkedlist;

this.linkedlist=newNode;

}


delete(value){

if(!this.linkedlist) return;

if(this.linkedlist.data===value) { this.linkedlist = this.linkedlist.next; return;  }


let currentNode=this.linkedlist;

while(currentNode.next && currentNode.next.data!==value) {

currentNode=currentNode.next;

}

return currentNode.next ? currentNode.next=currentNode.next.next : "NOT FOUND NOT DELETED";

}

find(value){
let currentNode=this.linkedlist;
while(currentNode && currentNode.data!==value) {

    currentNode=currentNode.next;
}

if(currentNode){ return currentNode ;}

else{return "NOT FOUND"}

}

getList () {

let currentNode=this.linkedlist;

let list=[];

while(currentNode)
{

list.push(currentNode.data);

currentNode=currentNode.next

}

return list;

}

}


module.exports=LinkedList;


