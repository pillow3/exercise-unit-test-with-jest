test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One yen should be 0.87 GBP", function() {
    
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.87; 
    expect(fromYenToPound(3.5)).toBe(expected);
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = 1 * 156.5;
    expect(fromDollarToYen(1)).toBe(expected);
})