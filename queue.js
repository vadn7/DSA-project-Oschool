class Queue {

constructor() {

    this.queue=[];
}

Enqueue(item){

    this.queue.push(item);
    
    }

Dequeue(){

if(this.isEmpty()) return null;


return this.queue.shift();

}


Front() {
if(this.isEmpty()) return null;
return this.queue[0];

}

isEmpty(){

return this.queue.length===0;

}

getQueue()
{

    return this.queue;

}

}

module.exports=Queue;