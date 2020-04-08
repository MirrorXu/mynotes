const obj = {
    log: ['a', 'b', 'c'],
    get latest () {
        if (this.log.length == 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    },
    set latest (value) {
        if (Array.isArray(this.log)) {
            this.log.push(value)
        }
    }
}


console.log(Object.getOwnPropertyDescriptor(obj, 'latest'));

console.log(obj.latest);  // c
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

obj.log.push('d')
console.log(obj.latest);  // d


obj.latest = 'e'
console.log(obj.latest);  // d
delete obj.latest
console.log('----- delete obj.latest -----');


console.log(obj.latest); // undefineds
console.log(obj);


console.log('----- 使用Object.defineProperty(target , key , desciptor) 定义getter setter -----');

Object.defineProperty(obj, 'latest', {
    get () {
        if (this.log.length == 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    },
    set (value) {
        if (Array.isArray(this.log)) {
            this.log.push(value)
        }
    }
})


console.log(obj.latest)
const a = (obj.latest = 'f')
console.log(a)

console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'latest'));



