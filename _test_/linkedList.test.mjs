//const LinkedList from "../linkedList";
//import { describe, expect, test } from '@jest/globals';


const LinkedList = require('../linkedList.mjs');

test('Test adding an item to a queue', () => 
    {
        const list = new LinkedList();

let node1 = new Node(1)

        list.append(node1);

        expect(list.getList().length).toBe(1);
    });