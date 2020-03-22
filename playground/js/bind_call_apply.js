/**
 * @returns {String} 一个符合js命名规范且全局唯一的变量名
 */
function generateVarName () {
    return `_fn_${String(Math.floor(Math.random() * 1000))}`
}

Function.prototype._myApply = function (ctx, arr = []) {

    ctx = ctx || Object.create(null)
    const fn = this
    const tempfnName = generateVarName()

    Object.defineProperty(ctx, tempfnName, {
        value: fn,
        enumerable: false,
        writable: true
    })

    const res = ctx[tempfnName](...arr)
    delete ctx[tempfnName]
    return res
}

Function.prototype._myCall = function (ctx, ...args) {
    return this._myApply(ctx, args)
}

Function.prototype._myBind = function (ctx, ...args) {
    return (...otherArgs) => {
        return this._myApply(ctx, args.concat(otherArgs))
    }
    // const self = this
    // return function resFn (...otherArgs) {
    //     return self._myApply(ctx, args.concat(otherArgs))
    // }
}


function logProps (split = '') {
    let ret = Object.keys(this)
    console.log(split ? ret.join(split) : ret);
}

var jordon = {
    firstName: 'Air',
    lastName: 'Jordan'
}
var car = {
    color: 'red',
    brand: 'Das Auto'
}

// var getJordonPros = logProps.bind(jordon, '-')
var getJordonPros = logProps._myBind(jordon, '-')

getJordonPros() // firstName-lastName

getJordonPros._myApply(car) //firstName-lastName
