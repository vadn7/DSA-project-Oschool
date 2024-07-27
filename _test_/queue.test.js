
const Queue = require('../queue');

const file = new Queue();

test('Test creating a queue', () => 
    {

        expect(file.getQueue().length).toBe(0);
    });


     test('Test adding an item to a queue', () => 
        {

file.Enqueue(1);
file.Enqueue(2);
            expect(file.getQueue().length).toBe(2);
        });

        test('Test dequeue with 1,2 ', () => 
            {

                expect(file.Dequeue()).toBe(1);

                expect(file.getQueue().length).toBe(1);

                expect(file.getQueue()[0]).toBe(2);


            });


            test('Testing Front with 2 ', () => 
                {
    
                    expect(file.Front()).toBe(2);
    
                });

                test('Testing isEmpty ', () => 
                    {        
                        expect(file.isEmpty()).toBe(false);
                    file.Dequeue();
                    expect(file.isEmpty()).toBe(true);


                    });