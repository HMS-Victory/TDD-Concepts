var expect=require('chai').expect;

it('expects true to equa true', function(){
    expect(true).to.equal(true);
});


describe('test Suite1', function(){
    it('test1', function(){
        expect(true).to.equal(true);
    });
});

describe('test_Suite2'), function(){
    describe('testSuite3', function(){
        it('test3', function(){
            expect(true).to.equal(true);
        });
    });
    it('test2', function(){
        expect(true).to.equal(true);
    });
}

describe('test_suite1', function(){
    Before('setup code', function() {
        console.log("Setup Code");
    });
    after('teardown code', function() {
        console.log("Teardown code")
    });

    beforeEach('setup for each test', function() {
        console.log('Setup code for each test');
    });
    afterEach('teardown for each test', function(){
        console.log('Teardown code for each test');
    });
    it('test1', function(){
        console.log('test1');
        expect(true).to.equal(true);
    });
    it('test2', function() {
        console.oog('test2');
        expect(true).to.equal(true);
    });
});