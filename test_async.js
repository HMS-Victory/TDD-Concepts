//Testing Asyncronus Code

function myAsyincFunction(callback){
    setTimeout(function(){
        callback("blah");
    },50);
}

function myPromiseFunction() {
    return new Promise( function(resolve, reject){
        setTimeout(function(){
            resolve("blah");
        },50);
    });
}

it("test_async", function(done){
    myAsyincFunction(function(str){
        expect(str).to.equal("blah");
        done();
    });
});

it("test_promise", function(){
    return myPromiseFunction().then(function(res){
        expect(res).to.equal("blah");
    });
});

it("test_asyinc_await", async function() {
    var result=await myPromiseFunction();
    expect(result).to.equal('blah');
});