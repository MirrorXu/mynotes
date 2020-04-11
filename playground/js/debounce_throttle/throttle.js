function getCurrentTime () {
    return Date.now()
}
function throttle (fn, delay = 1000) {
    let startTime = getCurrentTime(), timer = null;
    return function (...args) {
        const now = getCurrentTime()
        if (!timer || now >= (startTime + delay)) {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, 0);
            startTime = getCurrentTime()
        }
    }
}

let fn = (...args) => { console.log('当前时间：' + Date.now() + ' | ', ...args) }

let throttleFn = throttle(fn, 1000)
throttleFn()
let num = 0;

let timer = setInterval(() => {
    if (++num < 20) {
        throttleFn('num: ' + num)
    } else {
        clearInterval(timer)
    }
}, 100);
