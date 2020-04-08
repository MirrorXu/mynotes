function Wrapper (status, data) {
    if (this.constructor === Wrapper) {
        this.status = !!status
        if (this.status) {
            this.data = data
        } else {
            this.msg = data
        }
    } else {
        return new Wrapper(status, data)
    }
}

function isBigThanSix (num) {
    try {
        if (num > 6) {
            return Wrapper(true, num)
        } else {
            throw num
        }
    } catch (err) {
        return Wrapper(false, err)
    } finally {
        console.log('finally-isBigThanSix arguments', Array.from(arguments));
    }
    console.log('excuted');// 这行代码永远无法得到执行
}

function isBigThanTen (num) {
    try {
        if (num > 10) {
            return Wrapper(true, num)
        } else {
            throw num
        }
    } catch (err) {
        return Wrapper(false, err)
    } finally {
        console.log('finally-isBigThanTen arguments', Array.from(arguments));
        return Wrapper(true, `finally-return num = ${num}`)
    }
    console.log('excuted');  // 这行代码永远无法得到执行
}

function Line (length = 30) {
    console.log(Array(length).join('--'));
}





console.log(isBigThanSix(7));
Line()
console.log(isBigThanSix(6));

Line()
console.log(isBigThanTen(9));

Line()
console.log(isBigThanTen(11));

/*

finally-isBigThanSix arguments [ 7 ]
Wrapper { status: true, data: 7 }
----------------------------------------------------------
finally-isBigThanSix arguments [ 6 ]
Wrapper { status: false, msg: 6 }
----------------------------------------------------------
finally-isBigThanTen arguments [ 9 ]
Wrapper { status: true, data: 'finally-return num = 9' }
----------------------------------------------------------
finally-isBigThanTen arguments [ 11 ]
Wrapper { status: true, data: 'finally-return num = 11' }

*/