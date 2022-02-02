const checkout=require('.../Supermarket_Companion.js');
var expect=require('chai').expect;

beforeEach(function(){
    checkout=new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice('b', 2);
});

it('can add item price', function(){
    var checkout=new Checkout();
    checkout.addItemPrice('a', 1);
});

it('Can add item', function() {
    var checkout=new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
});

it('Can calculate the current total', function(){
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
});

it('Can add multipleitems and get correct total', function(){
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
});

it('can add discout rule', function(){
    checkout.addDiscout('a', 3, 2);
});

it('can apply discount rulesto the total',function(){
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);
});

it('Throws when item added with no price', function(){
    expect(function(){
        checkout.addItem('c')}).to.throw();
});