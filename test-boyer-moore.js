var assert = require('assert');
var bm = require('./boyer_moore');

describe('Boyer-Moore', function() {
    describe('find matching substring', function() {
        it('at start of string', function() {
            let str = 'quick sleak qa jumps over sleepy dev';
            let sub = 'qui';

            let rc = bm.indexOf(sub, str);

            assert.equal(rc, 0);
        });

        it ('at the end of string', function () {
            let str = 'quick sleak qa jumps over sleepy dev';
            let sub = 'dev';

            let rc = bm.indexOf(sub, str);

            assert.equal(rc, str.length - sub.length);
        });
    });
});