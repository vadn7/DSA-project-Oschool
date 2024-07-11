const factoriel =require('../recursion')

test('Test factoriel of negative number -3', () => 
    {

        expect(factoriel(-3)).toBe("ERROR");


    });

test('Test factoriel of 0 ', () => 
    {

        expect(factoriel(0)).toBe(1);


    });

    test('Test factoriel of 1 ', () => 
        {
            expect(factoriel(1)).toBe(1);
    
        });

        test('Test factoriel of 4 ', () => 
            {
                expect(factoriel(4)).toBe(24);
            });

            test('Test factoriel of 6 ', () => 
                {
                    expect(factoriel(6)).toBe(720);
            
                });