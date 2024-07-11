class Queue {

constructor() {

    this.queue=[];
}

Enqueue(item){

    this.queue.push(item);
    
    }

Dequeue(){

let    first=this.queue[0];


this.queue.splice(0,1);

return first;

}

Front() {

return this.queue[0];

}

isEmpty(){

this.queue=[];

}

getQueue()
{

    return this.queue;

}

}

module.exports=Queue;