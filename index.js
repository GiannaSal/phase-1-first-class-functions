const spy = chai.spy()
function receivesAFunction(spy) {
   spy();
}

function returnsANamedFunction(){
    return returnsANamedFunction;
}
function receivesAFunction(callback){
    callback();
}

var anonymous = function returnsAnAnonymousFunction(){
    return anonymous();
}

