//задание 1
//массив чисел
const num = [4, 9, 36, 49];

//кастомный map
function customMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push( callback(arr[i], i, arr) );
    }
    return newArr;
}
//колбэк
let cb = function(el) {
    return Math.sqrt(el);
}
//проверка
console.log( customMap(num, cb) );

//задание 2
//массив имён
const ppl = [
    {
        name: 'Man №1',
        age: 19
    },
    {
        name: 'Man №2',
        age: 10
    },
    {
        name: 'Man №3',
        age: 29
    },
    {
        name: 'Man №4',
        age: 23
    }
];
//кастомный filter
function filter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ( callback(arr[i], i, arr) ) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
//колбэк
let cb = function(el) {
    return el.age > 20;
}
//проверка
console.log( filter(ppl, cb) );


//задание 3
//массив объектов с уведомлениями
const notification = [
    {
        date: '10/07/2019',
        msg: 'Some message here 1'
    },
    {
        date: '12/07/2019',
        msg: 'Some message here 2'
    },
    {
        date: '19/07/2019',
        msg: 'Some message here 3'
    },
    {
        date: '19/07/2019',
        msg: 'Some message here 4'
    },
    {
        date: '22/07/2019',
        msg: 'Some message here 5'
    },
    {
        date: '22/07/2019',
        msg: 'Some message here 6'
    },
    {
        date: '22/07/2019',
        msg: 'Some message here 7'
    },
    {
        date: '23/07/2019',
        msg: 'Some message here 8'
    },
    {
        date: '31/07/2019',
        msg: 'Some message here 9'
    },
    {
        date: '31/07/2019',
        msg: 'Some message here 10'
    }
];
//решил через кастомный reduce
function customReduce(arr, callback, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i], i, arr)
    }
    return acc;
}
//колбэк
let cb = function(acc, el) {
    acc[el.date] = acc[el.date] || [];
    acc[el.date].push(el.msg);
    return acc;
}
//проверка
console.log( customReduce(notification, cb, {}) );