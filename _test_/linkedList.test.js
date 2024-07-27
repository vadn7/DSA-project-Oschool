

//const LinkedList from "../linkedList";
//import { describe, expect, test } from '@jest/globals';


const LinkedList = require('../linkedList');

const list = new LinkedList();

list.append(1);
list.append(2);

test('Test append an item to a linkedList', () => 
    {
        expect(list.getList().length).toBe(2);
    });


    test('Test prepend an item in a linkedList', () => 
        {

            list.prepend(3);
            expect(list.getList().length).toBe(3);

            expect(list.getList()[0]).toBe(3);

        });

        test('Test deleting an item in a linkedList', () => 
            {

               list.delete(3);

                expect(list.getList().length).toBe(2);
    
                expect(list.getList()[0]).toBe(1);

                
                expect(list.delete(3)).toBe("NOT FOUND NOT DELETED");


            });


            test('Test finding an item in a linkedList', () => 
                {
                   
                    expect(list.find(2)).toEqual({data: 2, next: null}); // We found an existing node
                    expect(list.find(4)).toBe("NOT FOUND"); // The node isn't in the list
    
                });