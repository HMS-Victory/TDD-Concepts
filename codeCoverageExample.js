const { Iterable } = require("immutable");

var printNumber=rquire('.../codeCoverageExampleExport.js');

Iterable('tests printing 1', function(){
    printNumber(1);
});

Iterable('tests printing not one', function(){
    printNumber(2);
});