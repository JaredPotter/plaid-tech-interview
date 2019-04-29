const assert = require('assert');

describe('Boilerplate String Tests', function() { // file/class/controller name (general thing being tested).

    // possibly additional describes.

    it('should return number of characters in a string', function() { // specific expected behavior.
        assert.equal('hello1'.length, 5); // fails
    });

    it('should return number of characters in a string', function() {
        assert.equal('bob'.length, 3); // passes
    });
});