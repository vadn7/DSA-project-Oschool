class Stack {

constructor() {
this.stack=[]

}

push (item) {

this.stack.push(item);

}

isEmpty(){

    return this.stack.length===0;
}

// Remove the last
pop() {// Retourne le 1er element ajoute a la pile

if(this.isEmpty()) return null;

return this.stack[0];

}

//Return the last
peek () {

    if(this.isEmpty()) return null;

return this.stack[(this.stack.length-1)]

}

getStack(){

    return this.stack;

}


}


module.exports=Stack;