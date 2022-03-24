

function receivesAFunction(cb) {
   console.log(cb())
};
receivesAFunction(function () {return `I'm getting the hang of this :)`})

function returnsANamedFunction(){
    return function beforeAll () {}
}

function returnsAnAnonymousFunction(){
    return function () {}
}
