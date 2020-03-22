/**
 * 基于已经实现的_myApply函数实现bind
 */
Function.prototype._myApply = function (ctx, arr = []) {
    ctx = ctx || Object.create(null)
    const _randomFnName = `_fn_${String(Math.floor(Math.random() * 1000))}`
    ctx[_randomFnName] = this
    const res = ctx[_randomFnName](...arr)
    delete ctx[_randomFnName]
    return res
}


Function.prototype._myBind = function (ctx, ...args) {
    return (...otherArgs) => {
        return this._myApply(ctx, args.concat(otherArgs))
    }
}


function add_num (intial = 0) {
    return this.age + intial
}

const tree = {
    age: 60,
    fn: add_num,
    child: {
        age: 40,
        fn: add_num,
        child: {
            age: 17,
            fn: add_num
        }
    }
}

const grandFa = tree
const Fa = grandFa.child
const son = Fa.child
console.log(grandFa.fn(), Fa.fn(), son.fn()); // 60 40 25


const getGrandFaAge = add_num._myBind(grandFa, -10);
const getFaAge = add_num._myBind(Fa)
const getSonAge = add_num._myBind(son, 2.5)

console.log(getGrandFaAge(), getFaAge(-7), getSonAge(-1));

