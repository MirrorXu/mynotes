function bar () {
    try {
        const a = 10;
        a = 20
    } catch (err) {
        throw err
    } finally {
        console.log('bar-finally执行');
    }
}


function foo () {
    try {
        bar()
    } catch (err) {
        console.log('error:', err.message);
    } finally {
        console.log('foo-finally语句执行');
    }
}


foo()
// bar-finally执行
// error: Assignment to constant variable.
// foo-finally语句执行

