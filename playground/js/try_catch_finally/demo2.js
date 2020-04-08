function fn () {
    try {
        console.log('try-block');
    } catch (err) {
        console.log('catch-block');
    } finally {
        console.log('finally-block')
    }
    console.log('excuted');
}
fn()
// try-block
// finally-block
// excuted
