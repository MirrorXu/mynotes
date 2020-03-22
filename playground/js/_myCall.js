Function.prototype._myCall = function (ctx, ...args) {
    // 此时this通常是调用_myCall函数的函数对象 , tpeof ctx === 'function' 

    ctx = ctx || Object.create(null)
    const _randomFnName = `_fn_${String(Math.floor(Math.random() * 1000))}`
    ctx[_randomFnName] = this
    const res = ctx[_randomFnName](...args)
    delete ctx[_randomFnName]
    return res
}


function sayHi (...args) {

    let str = `Hi , My Name is ${this.firstName || '' + this.lastName || ''} . `

    if (Array.isArray(args) && args.length > 0) {
        args.forEach(item => {
            str += (typeof item === 'string' ? item : Object.prototype.toString.call(item) + '.')
        })
    }

    return str
}

const person = { firstName: 'Mirror' }

console.log(sayHi._myCall(person, 'i m a good boy'))  //Hi , My Name is Mirror ,i m a good boy


