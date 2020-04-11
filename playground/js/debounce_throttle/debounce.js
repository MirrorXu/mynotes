function debounce (fn, time = 1000) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
            clearTimeout(timer)
        }, time);
    }
};

let fn = (...args) => { console.log('当前时间：' + Date.now() + ' | ', ...args) }


const debouncedFn = debounce(fn, 2000)
let num = 0;
let start = Date.now();
let finish;

console.log('start', start);

let timer = setInterval(() => {
    ++num;
    console.log('interValNum:', num);
    if (num <= 4) {
        debouncedFn(num, '--', finish = Date.now(), duration = finish - start)
    } else {
        clearInterval(timer)
    }
}, 900);
