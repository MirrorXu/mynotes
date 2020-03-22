function _type (target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}
// null
console.log(_type(null));

// undefined
console.log(_type(undefined));

// number
console.log(_type(Number()));
console.log(_type(NaN));

// string
console.log(_type(String()));
console.log(_type(''));

// symbol
console.log(_type(Symbol()));

// object
console.log(_type(Object()));
console.log(_type(obj = {}));

// array
console.log(_type(Array()));
console.log(_type([]));

// regexp
console.log(_type(RegExp()));
console.log(_type(/aaa/gi));

//date
// console.log(_type(Date()), Date());
console.log(_type(new Date()));

// error
console.log(_type(Error()));
console.log(_type(new Error('xxx')));


//function
console.log(_type(fn = () => { }));
console.log(_type(function fn () { }));
