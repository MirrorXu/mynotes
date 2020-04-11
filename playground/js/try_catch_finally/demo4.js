try {
    try {
        throw new Error("oops");
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}


// Output:
// "finally"
// "outer" "oops"


console.log(Array(30).join('--'));

try {
    try {
        throw new Error("oops");
    }
    catch (ex) {
        console.error("inner", ex.message);
        throw ex;
    }
    finally {
        console.log("finally");
    }
}
catch (ex) {
    console.error("outer", ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"

/**
 *任何给定的异常只会被离它最近的封闭 catch 块捕获一次。
 *当然，在“inner”块抛出的任何新异常 （因为 catch 块里的代码也可以抛出异常），将会被“outer”块所捕获。
 */


console.log(Array(30).join('--'));


function fn () {
    try {
        try {
            throw new Error("oops");
        }
        catch (ex) {
            console.error("inner", ex.message);
            throw ex;
        }
        // finally {
        //     console.log("inner-finally");
        //     return 'index return';
        // }
    }
    catch (ex) {
        console.error("outer", ex.message);
    } finally {
        console.log("outer-finally");
        return 'outer return';
    }
}
console.log(fn());

// 注: 此 try catch 语句需要在 function 中运行才能作为函数的返回值, 否则直接运行会报语法错误
// inner oops
// inner-finally
// outer-finally
// outer return

/**
 * 如果从finally块中返回一个值，
 * 那么这个值将会成为整个try-catch-finally的返回值，
 * 无论是否有return语句在try和catch中。
 * 这包括在catch块里抛出的异常。
 */


console.log(Array(30).join('--'));

function catchFn () {
    let a;
    try {
        a = fn()
    } catch (err) {
        console.log(err.message || 'catchFn-catch');
    } finally {
        console.log('catchFn-finally');
    }
}

console.log(catchFn());
