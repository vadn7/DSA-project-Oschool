const HashMap = require('../hashMap');

const hashMap = new HashMap(10);

test('Creating an hashMap  ', () => 
    {
        expect(hashMap.taille).toBe(10);
    });


    test('Adding a key and a value or a value alone and getting the value  by using a key', () => 
        {



            expect(hashMap.set('Alice', '0123456789')).toBe("ADDED");

//            const contact1 = {'Alice','0123456789'}

        });

        test('Getting a key and his value', () => 
            {
    
                hashMap.set('Alice', '0123456789');
    
    //            const contact1 = {'Alice','0123456789'}
    
    
    
                expect(hashMap.get('Alice')).toStrictEqual({"key": "Alice", "value": "0123456789"});
    
                expect(hashMap.get('Ali')).toStrictEqual(null);
    
            });

            test('Deleting a key and its value', () => 
                {

                    hashMap.set('Alice', '0123456789');

                    hashMap.delete('Alice')

                    expect(hashMap.get('Alice')).toBe(null); // Voir si on a bien supprimer



                    expect(hashMap.delete('Alice')).toBe("NOT FOUND NOT DELETED");  // Suprimer quelque chose qu'il n'existe pas


                });