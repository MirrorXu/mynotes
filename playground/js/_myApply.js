Function.prototype._myApply = function (ctx, arr = []) {
    // 此时this通常是调用_myApply函数的函数对象 , tpeof ctx === 'function' 
    ctx = ctx || Object.create(null)
    const _randomFnName = `_fn_${String(Math.floor(Math.random() * 1000))}`
    ctx[_randomFnName] = this
    const res = ctx[_randomFnName](...arr)
    delete ctx[_randomFnName]
    return res
}


const obj = {
    NUMS: [1, 2],
    SUM: function (initialValue = 0) {
        return this.NUMS.reduce((previousValue, currentValue) => {
            currentValue = !isNaN(Number(currentValue)) ? Number(currentValue) : 0
            return previousValue += currentValue
        }, initialValue)
    }
}

const anotherObj = {
    NUMS: [1, 1, 1]
}

console.log(obj.SUM(0.1)) // 3.1

console.log(obj.SUM._myApply(anotherObj, [0.5])); //  3.5
