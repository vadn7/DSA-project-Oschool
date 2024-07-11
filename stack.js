class Stack {

constructor() {
this.stack=[]

}

push (item) {

this.stack.push(item);

}

isEmpty(){

    this.stack=[];
}

// Remove the last
pop() {

return this.stack.splice(this.stack.length-1,1);

}

//Return the last
peek () {

return this.stack[(this.stack.length-1)]

}

getStack(){

    return this.stack;

}


}



let file = new Stack();

file.push(1);

console.log(file);


file.isEmpty();



console.log(file);

module.exports=Stack;