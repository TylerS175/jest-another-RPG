const randomNumber = require('../lib/random.js');

test('gets random number 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanorEqual(10);
});

