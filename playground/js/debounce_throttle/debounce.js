// 防抖包装函数
function debounce (fn, delay = 1000) {
    let timer = null;  // 创建一个标记用来存放定时器的返回值
    return function (...args) {
        clearTimeout(timer)  // 每当函数调用的时候把前一个 setTimeout clear 掉
        // 然后又创建一个新的 setTimeout。
        // 最终保证在delay时间段内函数多次调用时只会是最后一次的函数调用能够执行
        timer = setTimeout(() => {
            fn.apply(this, args)
            clearTimeout(timer)
        }, delay);
    }
};

// 验证
const getCurrentTime = () => Date.now()
let fn = (num) => console.log(`*第${num}次调用被执行, 执行时的时间戳：${getCurrentTime()}`)

// 包装出一个防抖时间为2000毫秒的函数对象
const debouncedFn = debounce(fn, 2000)

console.log(`开始运行： ${getCurrentTime()}`)

// 以1000毫秒的抖动频率 执行 2000毫秒防抖函数对象，防抖效果正常，只有最后一次的调用被执行
let interValTime = 1000;

// 以3000毫秒的抖动频率 执行 2000毫秒防抖函数对象，防抖效果会丢失，防抖函数每次都会执行
// let interValTime = 3000;

// 计数器声明
let num = 0;

// 使用指定的频率调用拥有防抖效果的函数对象
let timer = setInterval(() => {
    if (++num <= 5) {
        let now = getCurrentTime()
        console.log(`第${num}次调用debouncedFn, 调用时的时间戳：${now}`);
        debouncedFn(num)
    } else {
        clearInterval(timer)
    }
}, interValTime);
