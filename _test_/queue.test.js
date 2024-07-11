
const Queue = require('../queue');

/*test(' Testing adding to the queue ', ()=> { 
     
    let file = new Queue();

    file.Enqueue(1);
    file.Enqueue(2);
  */  //pile.push(2);
  //  pile.push(3);
//    pile.push(4);

//expect(library.books).toHaveLength(1);
//expect(library.books[0]).toEqual(book);
    //  expect(contains(nestedObject,44)).toBe(true);
     
    //expect(sum(10)).toBe(55);
    
    //expect(pile).toHaveLength(1);
  /*      
    expect(file.getQueue.length).toHaveLength(2);
    
    
     }  )

*/
     test('Test initial library has zero book', () => 
        {
            const library = new Queue();
library.Enqueue(1);

            expect(library.getQueue().length).toBe(1);
        });