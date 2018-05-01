
const fizzBuzzer = require('../fizzBuzzer');
const expect = require(`chai`).expect;

describe("fizzBuzzer", function() {
    it("should fizz, buzz, or fizz-buzz depending on number divisbility of 3, 5, both respectively", function() {
        const normalCases = [
            {input: 9, output: "fizz"},
            {input: 25, output: "buzz"},
            {input: 30, output: "fizz-buzz"},
            {input: 7, output: 7},
        ];

        normalCases.forEach(function(testCase) {
            expect(fizzBuzzer(testCase.input)).to.equal(testCase.output);
        });
    });

    it("should give an error when typeOf number is not given", function() {
        const failedCases = [
            {input: "disco"},
            {input: [3, 17]},
            {input: null}
        ];

        failedCases.forEach(function(testCase) {
            expect(function() {fizzBuzzer(testCase.input)}).to.throw(Error);
            // expect(fizzBuzzer(testCase.input)).to.throw(Error);  This doesn't work?
        });
    });
});