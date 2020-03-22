
const proto = Object.create(Object.prototype)

Object.defineProperties(proto, {
    'prop1': {
        enumerable: false,
        value: "prop1"
    },
    'prop2': {
        enumerable: true,
        value: 'prop2'
    },
    'prop3': {
        enumerable: true,
        value: 'prop3'
    }
})



const obj = Object.create(proto);
obj.name = '张三'
obj.age = 19
console.log(obj.__proto__ === proto);
console.log(obj);


for (let key in obj) {
    console.log(key);
}


console.log('Object.keys:', Object.keys(obj));
console.log('Object.getOwnPropertyNames:', Object.getOwnPropertyNames(obj));

