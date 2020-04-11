// 节流函数
function throttle (fn, interValTime = 1000) {
    let canRun = true  // 通过闭包保存一个标记
    return function throttledFn (...args) {
        if (!canRun) return  // 在函数开头判断标记是否为true，不为true则return
        canRun = false  // 立即设置为false
        let timer = setTimeout(() => {  // 将外部传入的函数的执行放在setTimeout中

            fn.apply(this, args)
            // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
            canRun = true
            clearTimeout(timer)
        }, interValTime)
    }
}


// 验证

// 获取当前时间戳的方法
const getCurrentTime = () => Date.now()

let fn = (num, time) => console.log(`第${num}次调用有效，调用时：${time} , 执行时：${getCurrentTime()}`)

// 以1000毫秒为单位进行节流的函数对象
let throttledFn = throttle(fn, 1000)

let num = 0;
let interValTime = 500;

console.log('开始：', getCurrentTime())

// throttledFn(undefined, getCurrentTime())

let timer = setInterval(() => {
    if (++num <= 10) {
        throttledFn(num, getCurrentTime())
    } else {
        clearInterval(timer)
    }
}, interValTime);
