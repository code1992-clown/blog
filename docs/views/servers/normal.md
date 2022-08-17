## js基础
- 变量声明和变量赋值
```javascript
let a = 1,b = 2; // 命名多个
console.log(a,b); // 1 2
// 1. 动态语言：根据值来识别变量的数据类型，弱类型语言
// 2. 静态语言： 编译型语言，强类型语言
```
- 数据类型
```javascript
//原始值， 基本数据类型： Number String Boolean null undefined Symbol Bigint
//引用值，Object,Array,Function,Date,RegExp 等

```

- 栈内存(Stack)，堆内存(Heap)
```javascript
    1. 栈内存(Stack): 不会跟着值的改变而改变，修改的话，又开辟了一个新的空间，原来的空间会保留，将来要占用的话，需要进行覆盖；
    2. 堆内存(Heap): 引用类型的指针存在栈内存，指针指向堆内存，进行赋值的时候，会指向同一个指针=>同一块堆内存空间
```
- 错误
```javascript
// 语法错误： 代码一行都不会执行
// 通用错误： 会中断执行，之前执行，后面不执行

// 脚本块与脚本块错误不相互影响
```
- 判断数据类型
```javascript
    console.log(typeof 124) // 这个方法很独特，需要研究研究
    // null: 历史遗留问题，开始之初是表示空对象(空指针)，2015，提议改成null类型，ECMA拒绝(代码兼容问题),是个bug
```

- 运算符
    1. 加法: 基本数据类型 +string = string
    2. 除法：0/0, NaN(not a number),类型为number;
        1/0,Infinity,number类型
    3. 取余： %
    ```javascript
        let a = 1;
    console.log(a++); // 先打印后运算 ++ 优先级感觉比赋值运算符还低
    console.log(a) //2
    ```
    4. 比较运算符,字符串会比较ASCII码
    5. NaN 与任何值都不相等
- 循环
```javascript
    var i = 0
// for 循环和 while循环 可以相互转换
for(; i < 5; ){
    console.log(i)
    ++i
}
while(i<10){
    console.log(i)
    ++i
}

// break: 中止循环，让循环中止等价功能是限制循环条件
// continue: 跳过循环条件

// 小案例
    var i = 10;
    for(;i--;){
        console.log(i)
    }

// n次方
    var n = 5
    var num = 1
    for(var i = 1;i<=n;i++){
        num*=10 //10的n次幂
        // num*=i // 阶乘

    }
    console.log(num)
```

- 类型转换
    1. 显式类型转换
    ```javascript
    // Number: 转数字 “sdfas”=>NaN, true=>1,false=>0,null=>0,undefined=>NaN
    console.log(Number('1ss')) // NaN
    console.log(Number('1')) // 1

    console.log(parseInt('10',16)) // 16
    console.log(parseInt('10',0)) // 10
    console.log(parseInt('10',1)) // NaN
    console.log(parseInt('10',2)) // 2
    console.log(parseInt('a',16)) // 10
    console.log(parseInt('a123')) // NaN
    console.log(parseInt('23a')) // 23

    console.log(+'12') //转数字

    // String: 转字符串  null和undefined没有toString方法，toString有个方法，进制
    // Boolean: 转布尔值

    ```
    2. 隐式类型转换
    ```javascript
    console.log(null == 0); // false
    console.log(undefined == 0); // false 
    console.log(undefined == null) // true

    // 全局的isNaN,会进行隐式类型转换=>Number
    console.log(isNaN('12'))


    // console.log({}==!{})
    // console.log([]==![])
    // 1. 原始值=>原始值
    // Number()
    // console.log(Number(undefined)) // NaN
    // console.log(Number(null)) // 0    null空指针，对象类型

    // Boolean()
    // console.log(Boolean(undefined)) // false
    // console.log(Boolean(null)) // false
    // console.log(Boolean(Infinity)) // true
    // falsey(虚值)： null ,undefined,0(+0,-0),NaN,false,'' 6个或者7个，只有这几个都是true

    // console.log(typeof Infinity) // number 无穷大
    // console.log(Number(Infinity)); // Infinity

    // 2. 对象=>原始值
    // 布尔值
    // console.log(Boolean([])) // true 
    // console.log(Boolean(Symbol())) // true 
    // console.log(Boolean(new Error())) // true 
    // console.log(Boolean({})) // true 
    // console.log(typeof Symbol()) // symbol
    // console.log(typeof 1n) // bigint
    // console.log(typeof function(){}) // function
    // console.log(typeof Date); // function
    // console.log(typeof Date()); // string 
    // console.log(typeof new Date()); // Object

    // 数字类型
    var obj = { // 1. 调用valueOf，如果是原始值，返回原始值，否则走toString,如果是原始值，返回，否则继续沿着原型链网上找
        toString(){ 
            // return [] // 这个会报错，不能重写
            return 44 //44
        },
        valueOf(){
            // return 2 // console.log(Number(obj)) // 2
            return {} // console.log(Number(obj)) // NaN
        }
    }
    // console.log(Object.prototype.toString.call({}),'ss')
    // console.log(Number(obj)) 
    // 1. valueOf ,值是原始值，Number包装以后返回
    // 2. 不是原始值， toString() 是原始值，Number包装以后返回
    // 1. toString 返回不是原始值，报错
    console.log(Number([1,2,3])) // NaN
    console.log(Number([10])) // 10
    console.log(Number({})) // NaN

    // null undefined 没有相对应的包装类
    // console.log(null.toString()) // 报错
    // console.log((12).toString()) // 12



    // String 等价于 “” + xxxx
    // var test1 = {
    //     toString(){
    //         return 1
    //     },
    //     valueOf(){
    //         return 33
    //     }
    // }
    // console.log(''+{}) // [object Object]
    // console.log(String(test1)) // 寻找的顺序是Number相反，先走toString,然后走valueOf,其他完全一样

    // function fn(){}
    // console.log(String(fn)) // function fn(){}
    // console.log(fn.toString()) // function fn(){}

    // console.log(Number(023)) // 八进制 19
    // console.log(Number('124')) // 124
    // console.log(Number('    124')) // 124
    // console.log(Number('.124')) // 0.124
    // console.log(Number('abc124')) // NaN
    // console.log(Number(' 2 4')) // NaN

    // parseInt parseFloat 进制的范围0--36
    // console.log(parseInt('11',0)) // 0 是按照十进制处理的
    // console.log(parseInt('1',1)) // 1 NaN
    // console.log(parseInt('11',2)) // 3
    // console.log(parseInt('11',3)) // 4
    // console.log(parseInt('11',3)) // 4
    // console.log(parseInt('11',undefined)) // 11 进制不存在按照默认十进制
    // console.log(parseInt('11',''))// 11 进制不存在按照默认十进制
    // console.log(parseInt('11',false))// 11 进制不存在按照默认十进制


    // 隐式类型转换涉及布尔转换
    // if while switch && || ! !! for(;;) ?:
    // 数字转换
    // + - * / % ~~ << >> & | ^
    // == !== > < >= <=
    // 记住转Number
    // 原始值
    // console.log(true == 1) // true
    // console.log('1' == true) // true
    // console.log('1' == 1) // true

    // console.log(undefined == true) // false 
    // console.log(null == 0) // false
    // console.log(null == 1) // false 
    // console.log(NaN == NaN) // false 
    // console.log(null == undefined) //true

    // 引用值
    // console.log([1]==1) // true
    // console.log(['1']==true) // true
    // console.log([]==false) // true


    console.log([]==![]) //  0 == 0
    console.log({}=={})  //Nan == NaN
    // 1. 类型相同不用隐式类型转换
    // 2. 特例： undefined == null 只有这一个 和规则不符
    //          NaN 与任何值都不想等
    ```
- 函数 
    1. 函数式编程
    2. 高内聚，低耦合 ---> 模块的单一职责
    3. 解耦合 ----> 用函数可以很好的解耦合
    4. 函数最基本的写法 -----> 函数声明
    ```javascript
    function test(){} // 函数声明
    // var fn = function(){} // 表达式 字面量的方式

    var fn = function(){}// 匿名函数表达式 函数字面量
    var fn1 = function fnnn(){  // fnnn外部不可见，会被忽略，递归可以用到，
    }
    console.log(fn.name) // fn
    ```
    5. 命名规则: 小驼峰命名
    6. 形参和实参数
    ```javascript
    function test(a,b,c){
    console.log(arguments) // 获取实参
    for(var i = 0;i<arguments.length;i++){ // arguments伪数组,可以循环
        console.log(arguments[i]);
    }
    console.log(test.length) // 获取形参长度 2
    }
    test(1,2)

    // 例子
    function test(){
    var sum = 0
    for(var i = 0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    console.log(sum)
    }
    test(1,2)


    // 例子2
    function test(a,b){
    a=100 // 可以修改实际参数的值
    console.log(arguments)
    console.log(arguments[0]) //
    }
    test(1,2)


    // 例子3
    function test(a,b){
    b=88 // b为undefined
    console.log(arguments[1]); // undefined
    }
    test(1)


    console.log(xxxx) // 报错 xxxx 不存在
    console.log(typeof(xxx)) // undefined

    // 总结
    // 传入值的可以修改，没传入的无法修改
    // 函数：一个固定的功能或程序段被封装的过程。实现一个固定的功能或程序，在这个封装体中需要一个出口(返回值)和入口(参数)
    // 默认值：函数参数的默认值是undefined,
        function test(a=1,b=3){
            console.log(a,b)
        }
        test(,20)
    
    ```
    7. 预编译
    ```javascript
    // Ao activation Object 活跃的对象，函数上下文
    // 1. 寻找行参和变量声明
    // 2. 实参值赋值给行参；
    // 3. 找函数声明，赋值
    // 4. 执行

    // 暗示全局变量
    var a = 1;
    b=2
    console.log(window.b) //a = window.a  b=window.b


    function fn(){
        var a = b = 1;
    }
    fn()
    console.log(a)//报错 b为全局变量

    // 例子
    function test(a){
    console.log(a) // f a() {}
    var a = 1;
    console.log(a);// 1
    function a () {}
    console.log(a)//1
    var b = function () { }
    console.log(b)// fn(){}
    function d(){}
    }
    test(2)
    // Ao { // 函数区域上下问
        // a: undefined,2:fn, 1
        // b:undefiined
        //d:fn
        
    // }

    var a = 1;
    function a () {
    console.log(2)
    }
    console.log(a) // 1
    //GO { 等价于 window
        // 1. 实参值赋值给行参；
        // 2. 找函数声明，赋值
        // 3. 执行
    // }

    a = 1
    function test(){
        console.log(a) // undefined AO里有，不会往GO里找
        a =2 
        console.log(a) // 2
    var a = 3 
        console.log(a) // 3
    }
    test()


    function test () {
    console.log(b) // undefined
    if(a){
        var b = 3 //会在AO里变量提升
    }
    }
    var a ;
    test()


    function fn(){
        return a // 继续走Ao
        a=1
        function a(){}
        var a = 2
    }
    console.log(fn())



    window.a || (window.a = '1') // ()的优先级最高
    console.log(window.a)
    // 总结：
    // 1. 函数声明整体提升，变量只有声明提升，赋值是不提升
    ```

- 作用域和作用域链
    1. 函数也是一种对象类型
    ```javascript
    function test(){}
    console.log(test.name) // test
    console.log(test.length) // 0
    ```
- 闭包
    ```javascript
    // 当内部函数被返回到外部并保存时，一定会产生闭包，闭包会产生原来的作用域链不释放，过度的闭包可能会导致内存泄露或加载过慢
    // 闭包
    function test(){ // 闭包可以做数据缓存
        var n = 100
        function add () {
            n++
            console.log(n)
        }
        function minus () {
            n--
            console.log(n)
        }
        return [add,minus]
    }
    var arr = test()
    arr[0]() // 101
    arr[1]() // 100
    ```
- 立即执行函数
```javascript
    // 立即执行，执行完成后立即销毁, 
    // IIFE ： immediately-invoked-function-express
    (function(){})(); // 第一种写法
    (function(){}()); // 第二种写法 W3C推荐写法

    // (function(a,b){ // 执行完之后，立即销毁
//     // var a=1,b=2;
//     console.log(a+b) // 3
// }(3,4));

// var sum = (function(a,b){return a+b}(4,5));
// console.log(sum) // 9

// function fn(){
//     console.log(22)
// }(); // 报语法错误

var fn = function(){
    console.log(22)
}(); // 可以执行  表达式才能被执行符号执行 ()会把什么变成表达式,会忽略函数名
+ function(){ // + - || ！ &&  等，让函数什么变成表达式，并且函数名会自动忽略
    console.log('表达式')
}()
console.log(fn) // undefined 执行完就销毁了

// 例子

// function test(){
//     console.log(1)
// }() // 报错
function test(){
    console.log(1)
}(5) // 不报错 会把函数声明看成表达式
// ,: 也是一种运算符号

var a = 10;
if(function b () {}){ //(function b(){}) 会忽略b 变成表达式，忽略函数名
    a+=typeof(b)
}
console.log(a) // 10undefined
```
- 构造函数
```javascript
// 对象
var teacher={ // 1. 对象字面量
    name:'zs',
    sex:'male',
    weight:75,
    teach:function(){
        this.weight++
        console.log('i can teach',this.weight)
    }
}
teacher.teach() // 76
teacher.teach() // 77

// 2. 构造函数
var obj = new Object()
obj.name = 'ssss'
console.log(obj)

// 3. 自定义构造函数
function Teacher(options){
    this.name = options.name || 'zs'
    this.say = function(){
        console.log('hello: ',this.name)
    }
}
var t1 = new Teacher({name:'luck'})
t1.say()

// 原理
// function Car(color){
//     this.color = color
//     // return {} [] function(){} 返回引用值会改变返回的东西，原始值不起作用
// }
// Car('yello')
// console.log(window.color)

// 包装类 new Number / new String / new Boolean

// var a = 1
// // a.name = 12 // 原始值没有自己的属性和方法
// var b =new Number(1) // 变成数字对象
// b.age ='sss' // 可以增加属性
// console.log(b); // Number {1, age: 'sss'}

// console.log(null.length) // 报错
// console.log(undefined.length) // 报错

var num = 12

num.len =20 // 不报错
// new Number(num).len = 20 =>delete num.len
console.log(num.len) // undefined

var str = 'abc' // 经过一个包装类
// new String(str).length
console.log(new String())
console.log(str.length) // 3

str.length = 1
console.log(str) // abc 数组有截断方法，str不能截断，
// new String(str).length =1 delete
console.log(str.length); // 3
```
- 原型
```javascript
// 原型

function Person(name){
    this.name=name??'' // 属性问题，一般写到属性上
    // var this = { // 本质
    //     __proto__:Person.prototype // 默认就给装上了，__proto__ z这个可以修改
    // }
}
Person.prototype.say=function(){ //方法一般会写到原型上
    console.log('hello');
}

function Tel(){
}
//Person.prototype.constructor === Person
Person.prototype.constructor = Tel // 改变Person构造函数的原型
console.log(Person.prototype); // {constructor: ƒ}



    Test.prototype.name='lucy'
function Test(){}
var t = new Test()
Test.prototype={
    name:'resolve'
} // 重写，constructor实例化的时候，已经是原型的，所以重写在实例化之后不影响
Test.prototype.name='99' // 给prototype赋值，会影响name属性值
console.log(t.name) 
// 1. 原型的顶端是Object.prototype  
// 2. Object.prototype.toString()
// 3. 子集不能修改父级的原始值类型，能修改引用类型
// 4. 不是所有的对象都继承与Object.prototype, Object.create(null)


;(function(){ // 起到隔离变量的作用
    function Test () {}
    window.Test = Test
})()



<script>
// undefined null 不能经过包装类，还没原型
// var num = 1
// var obj = {}
// var obj2 = Object.create(null)
// obj2.toString = function(){
//     return 'obj2'
// }
// document.write(obj)
// document.write(obj2)

// 原型方法的重写

// call /apply
// function fn(){
//     console.log('a')
// }
// fn() // 等价于 fn.call() 系统默认会给个.call

// 链式调用
// return this

// car.key -> car['key']
// hasOwnProperty

// var czf = {
//     age:30
// }
// for ... in ....; xx in obj; 能打印原型链的东西
// console.log('age' in czf)// true
// console.log(czf.hasOwnProperty('age')) // true

// function Car (){
//     this.name = 'bwo'
// }

// var car = new Car()
// console.log(car instanceof Car); // true instanceof会查原型链

// var a = []
// console.log(a.constructor) // f Array
// console.log(a instanceof Array) // true
// console.log(Object.prototype.toString.call(a)) // [object Array]


// callee /caller

// function test(a,b,c){
//     // arguments.callee 返回函数本身
//     console.log(arguments.callee.length) // 3
//     console.log(test.length) // 3


//     console.log(arguments.length) // 4
// }
// test(2,5,4,5) 

const sum = (function(n){
    if(n<=1){
        return 1
    }
    return arguments.callee(n-1)+n
})(10)
console.log(sum) // 55 callee的运用

// caller 返回谁调用了该函数，严格模式下会报错

var aa = {}
var bb =aa
console.log(aa == bb)


</script>
```
- 严格模式 
```javascript
        // 严格模式  静默失败=>报错
        // 'use strict'
        //    var a=1 // {value: 1, writable: true, enumerable: true,configurable: false}
       var a = 10 // {value: 10, writable: true, enumerable: true, configurable: true}
        // delete window.a
        // console.log(a)
        console.log(Object.getOwnPropertyDescriptor(window, 'a'))

        // 变量
        // 1. 变量使用前必须要声明(变量使用前需要声明)
        // 2. 不能直接对变量操作delete(静默失败=>变量报错)

        // 对象
        // 1. 属性描述符出现不当操作的时候，会报错

        // 在严格模式下
        // 参数是唯一
        // 形参和实参映射关系不存在
        // 不能使用arguments.callee caller
        // 不允许使用 eval(有安全漏洞) with(可以改变函数在执行时候的上下文)
        // eval argumengts 不能 作为标识符
        // 不允许出现八进制
        // 函数默认指向undefined
```
- Es6 三大核心
1. 类 Class
2. Promise
```javascript
    // promise
    const promise = new Promise(()=>{})
    const promise1 = new  Promise((resolve,reject)=>resolve(2))
    const promise2 = new  Promise((resolve,reject)=>reject(2))

    console.log(promise) // Promise {<pending>}
    console.log(promise1) // Promise {<fulfilled>: 2}
    console.log(promise2) // Promise {<rejected>: 2}


    // 基于Promise A+ 规范；
    //3种状态
    // pending (准备状态)
    // fullfilled (成功状态)
    // rejected (失败状态)
    // 注意：promise状态一旦更改，就不再更改

    let p = new Promise((resolve,reject)=>{
        resolve('success') // 会走成功
        reject('error')
    })
    p.then(res=>{console.log(res)},error=>{
        console.log(error)
    })
```
3. 模块化 Module


## js技巧
- 类数组转数组
```javascript
let arrlike = {
    0:'name',
    1:'age',
    2:'job',
    length:3
}
let str = 'helloworld'
console.log(Array.from(arrlike)) // Es6提供的方法，只能实现浅拷贝，比较推荐使用
console.log(Array.prototype.slice.call(arrlike))// this指向问题，可以衍生出很多方法
console.log([...str]) // 不适用于非迭代对象上
// 使用案例
const res = Array.from({length:10},(item,index)=>`${index+Math.random()}`)
console.log(res)
```
- this
```javascript
    // 1. 默认绑定规则
    console.log('global',this === window) // true
   // 函数的独立调用
    function test(){
        console.log('function',this === window)
    }
    test()  // 等价于window.test() 
```
```javascript
// 2. 隐式绑定：谁调用就指向谁（隐式丢失，参数绑定）
let a = 0
let obj = {
    a:10,
    foo:function(){
        console.log(this) // true this指向obj，因为是obj调用的
        function test(){
            console.log(this === window) // window 函数的独立调用
            function a (){
                console.log('a',this)
            }
            a();
            (function(){
                console.log('iife',this) // 立即执行函数，this=>window // globalThis
            })()
        }
        test()
        function c (){
            console.log('c',this) // window
        }
        return c // 闭包
    }
}
obj.foo()() // 每个函数在执行的时候，就会有自己的this指向
const fn = obj.foo // 隐式丢失
fn() // this 指向window
```
```javascript
// 3. 显式绑定： call apply bind
function foo(){
    console.log(this)
}
let obj = {}
foo.call(obj) // 改变this指向

let arr = [1,3]
arr.forEach((item)=>{
    console.log(this)
})

let ob = {
    a:1
};
(function(){
    console.log(this) // ob
}).call(ob)
```

```javascript
// 4. new 绑定 
优先级最高
```
```javascript
// 箭头函数中的this;
// 箭头函数中没有this,是由父级作用域决定;
// this指向不能修改;
// 不存在arguments对象;
const obj = {
    a:1,
    foo:()=>{
        console.log(this) // 外层作用域 window
    }
}
obj.foo() 

const bar = ()=>{
    console.log(this)
}
new bar() // 报错
```
- null 和 undefined
```javascript
undefined: 原始值的初始值；为定义；
null: 对象的原始值，空对象的引用；
```

- Es6
1. let 和 const 
```javascript
<script>
    // Es6
    // [[scope]] 作用域 GO AO
    // kiss keep it simple stuped

    // let 块级作用域  {} 
    // 1. if(){}
    // 2. for(;1;){}
    // 3. {}
    // 特征： 1.同一变量在同一个作用域中(GO,AO)，不允许重复声明;
    //       2.let 不会声明提升，会产生一个暂时性死区
    //       3.let 只能在当前的块级作用域下生效

    // const 定义必须赋值，值不能被修改，其他和let一样
    // 引用类型的时候，可以把对象冻结，freeze

    // let const 不属于顶层对象(window)

    const arr = [1,3]
    Object.freeze(arr) // 冻结
    arr.push(23)
    console.log(arr)

    // let a = 2
    // // let a =1
    // console.log(a) // 全局的重复声明

    // function fn(a){
    //     {
    //         let a = 100
    //         console.log(a) // 100 {}作用域
    //     }
    //     let a = 10 // 报错 函数作用域的重复声明
    //     console.log(a)
    // }
    // fn()

    // 临时性死区
    // console.log(a) // 报错
    // let a = 10

    // var x =x 
    // console.log(x) // undefined
    // let y = y
    // console.log(y) // 报错

    // function test(x=y,y=3){
    //     console.log(x,y) // y报错，暂时性死区
    // }
    // test()

    // console.log(typeof a) // 报错，typeof 不再安全 
    // let a  

    // {
    //     let a = 1 // let 只能在当前的块级作用域下生效
    // }
    // console.log(typeof a ) // undefined

    // for(let i = 0; i<10;i++){
    //     // let i = 'a'
    //     var i = 'a' // 报错
    //     console.log(i) // 10 个 a  和下面的等价
    // }
    // if(1){ //块级作用域潜逃
    //     let a = 1
    //     {
    //         let a = 10
    //         console.log(a)
    //     }
    // }


    // for(var i = 0;i<10;i++){
    //     var i ='a' 
    //     console.log(i) // 1个a
    // }
    // 不建议在块级作用域中声明函数
    // 块级作用域没返回值

    // let a = 1
    // {
    //     // 函数变量提升只提升到其作用域顶部
    //     function a (){
            
    //     }
    // }
    // console.log(a) // 1


        // var x=1
    // {
    //     let x = x  // 临时性死区 TDZ
    //     console.log(x) // 报错
    // }

    // 默认值
    // function add(x=2,y=x){ // 默认值x=2  => let x = 2
    //     console.log(x+y)
    // }
    // add()

    // let x = 10
    // function fn(x){ // 报错， 相当于在作用域顶层设置 let x = undefined
    //     let x =100
    //     console.log(x)
    // }
    
    let x = 10
    function fn(x=x){ //():有自己的作用域 Cannot access 'x' before initialization
        console.log(x)
    }
    fn()

    // 惰性求值：每一次都会重新计算表达式的值

</script>
```

2. 解构赋值
```javascript
<script>
// 解构 模式匹配(结构化赋值) 两边的结构完全相同
// let [a,b,[c]] =[1,2,[6]]
// console.log(a,b,c) // 1 2 6
// // 解构失败(变量多了)
// let [d,e,[f]] =[1,2,[]]
// console.log(d,e,f) // 1,2,undefined

// // 不完全解构(值多了)
// let [x,,[y]] =[1,2,[5]]
// console.log(x,y) // 1,5

// // 默认值
// // let [w=10,z=100+w]=[undefined]//除了undefined,都会生效
// // console.log(w,z)

// const fn=()=>3
// let [w=fn()]=[33] // 可以给函数
// console.log(w)

// 对象解构
// let first = 'n'
// let second = 'ame'
// let eat = function(){
//     console.log(999)
// }
// let obj = {
//     first,
//     second,
//     eat,
//     [first+second]:'拼接'
// }

// console.log(obj,'obj')
// obj.eat()

// let {name,age,a:as=10}={name:1,age:'age'} // 对象的结构不存在顺序
// console.log(name,age,as)

//技巧
// let a;
// ({a}={a:1}) // 变成表达式
// console.log(a)

// let arr = [1,3,4],obj={};
// [obj.a,obj.b,obj.c]=arr
// console.log(obj)//{a: 1, b: 3, c: 4}

// let arr = [1,2,3] // 数组也是特殊的队形，也可以进行解构赋值
// let {0:first,[arr.length-1]:last} = arr
// console.log(first,last) // 1 3

// ([x])=['x']// 报错 模式不匹配
// ()
// 1. 用 let/var 声明，加（）就报错

// 交换值
// let a = 1,b=19;
// [a,b]=[b,a]
// console.log(a,b) // 19 1

// 变量的解构本质是变量的赋值

// let {a:x,a:y}={a:100} //模式匹配可以匹配同源属性（同一个源属性）
// console.log(x,y) // 100 100

// 解构的隐式转换
const [a,b,c,d,e] ='hello'
console.log(a,b,c,d,e) // h e l l o
const {length:len}='hello'
console.log(len) // 5

let {toString:s}= 123
console.log(s) // 函数

// 布尔值，number，string都能进行隐类型转换
// undefined null 没有对应的包装类，不能进行隐式转换
</script>
```
- 箭头函数
```javascript
    // function test(a,b,c=1,d){
    //     arguments[2]=100
    //     console.log(arguments) // 给了默认值，映射关系不存在
    // }
    // test(1,3,4,5)
    // console.log(test.length) //2 函数的形参会根据给的默认值位置计算

    // function fn({x,y=10}={}){ // 兼容处理
    //     console.log(x,y)
    // } 
    // fn()

    // 箭头函数表达式
    // 箭头函数是个操作符
    // 基本形式 ()=>{} const f  =  a=>a
    // 箭头函数和解构赋值一起使用
    // const full = ({first=1,last=2}={})=>first+last
    // console.log(full()) // 3
    // 箭头函数的特性
    // 1. 没有arguments,本质上并不是function，是胖箭头  / spread/rest 运算符  ... ,用来展开和收起
    // const add = (...args)=>{ // 收集原则
    //     console.log(args) // [1,3]
    // }
    // add(1,3)

    // const full = (x,y,z)=>{
    //     console.log(x,y,z) // 1 3 4
    // }
    // full(...[1,3,4]) // 展开原则
    // full.apply(null/undefined,[])// 不改变this指向
    // 2. 
    // let a = [2,3,4]
    // let b = [1,...a,5]
    // console.log(b) // [1,2,3,4,5] 可以替代Array.concate方法

    // 1. 箭头函数this由最外层来决定，指向是固化的，箭头函数内部没有this，没有bind，call，apply等方法;本质上不是通过function来定义的
    // 2. 不能够作为构造函数来使用
    // 3. 没有arguments对象， 使用rest来替代
    // 4. yield命令不能生效，在generator函数中
```
- 扩展
```javascript
<script>
// 函数名的扩展
// const fn = function(){}
// console.log(fn.name) // fn

// console.log((new Function).name) // anonymous
// console.log(fn.bind({}).name) // bound fn

// 对象的扩展
// const foo = 'foo'
// const obj = {foo,say(){
//     console.log('i can say')
// }} // 属性简写和方法简写
// console.log(obj) // {foo: 'foo'}
// obj.say() // i can say

// const full = (a=1,b=12)=>({a,b})
// console.log(full())// {a: 1, b: 12}

// const obj = {}
// const fn  = ()=>({
//     // toString:()=>'foo'
// })
// obj[fn()] = '99' // [] 内部会进行toString转换
// obj[true] = 'boolean'
// console.log(obj) // {[object Object]: '99', true: 'boolean'} 


// 属性描述符
// let obj = {
//     a:1
// }
// console.log(Object.getOwnPropertyDescriptor(obj,'a')) // 属性描述符
// {value: 1, writable: true, enumerable: true, configurable: true}
// writable:可写,是否可以修改属性，但是可以删除（有bug）
// enumerable: 可枚举, 
// configurable: 可配置， 是否可以重新配置对象的属性, 但是可以删除（有bug）
// value: 值
// configurable：false 和  writable:false,  不能删除也不能修改

// defineProperty 修改或者添加一个新的属性
// Object.defineProperty(obj,'ss',{
//     value:100,
//     enumerable:true,
//     writable:true,
//     configurable:true
// })
// console.log(obj)

// get操作  put操作
const obj = {
    a:1,
    get name(){ // get 定义的微属性
        return this._name
    },
    set name(v){
        this._name = v
    }
}
console.log(obj.a) // 1 本质：[[Get]] 默认操作，查找当前属性，没有的话查询原型属性
obj.a = 90 // 赋值操作 [[Put]]默认操作：
// 1. getter setter
// 2. writeable: false 
// 3. 赋值
console.log(obj.name) // undefined
obj.name = 'ssss'
console.log(obj.name) // ssss
</script>
```

- 正则表达式
```javascript
    <script>
        // 正则表达式
        // 正则：用来处理(匹配)字符串，是单独的语法体系

        // 1. 元字符
        // . [] [^] ? * + {min,max} ^ $ ()  \1\2 |

        // 转意字符: \  处理元字符
        // console.log(/\+/.test('+')) // true
        // console.log(/a/.test('hal')) // true

        // 2. 字符组
        // []范围；在固定范围内匹配一个，注意字符组的顺序
        // console.log(/1/.test('1')) // true
        // console.log(/[123456789]/.test('1489')) // true 太过繁琐
        // console.log(/[1-9]/.test('1489')) //  true 必须是连续的且有顺序，ASCII
        // console.log(/[1-9a-zA-Z]/.test('1aAss')) // true 优化方法
        // console.log(/[^0-9]/.test(9)) // false  取反
        // console.log(/[^sa]/.test('^')) // true
        // \d [0-9]  \D [^0-9]
        // \w [a-zA-Z0-9_]  \W [^a-zA-Z0-9_]
        // \s [\f\n\r\t...]  \S [^\f\n\r\t...]  非打印字符
        
        // 3. 量词
        // {n} 匹配n次  
        // {n,m} 匹配最少n次，最多m次
        // {n,} 最少n次，最多无限次
        // 空格是有特殊语意的，不要加空格

        // ？{0,1}
        // * {0,}
        // + {1,}

        // 正则的贪婪模式：能多就多
        // 正则的非贪婪模式：能少就少 "量词"后加？
        // console.log(/[0-9]{6}/.test('123456')) // true
        // console.log(/\d{6}/.test('123456')) // true
        // console.log(/\d{6}/.exec('a199456')) // ['199456', index: 1, input: 'a199456', groups: undefined]

        // console.log(/\d{2,6}/.exec('32445')) // 至少2，最多6， 匹配6个 ['32445', index: 0, input: '32445', groups: undefined]

        // console.log(/\d{2,6}?/.exec('32445')) // 至少2，最多6， 匹配6个 ['32', index: 0, input: '32445', groups: undefined]

        // 4. 分组和捕获 ()
        // 反向引用 /1/2
        // console.log(/./.test('a')) // true .可以匹配“任意字符”，具体需要查看文档

        // console.log(/ab{2}/.test('abb')) // true
        // console.log(/(ab){2}/.exec('abab')) //分组与捕获 ['abab', 'ab', index: 0, input: 'abab', groups: undefined]

        // console.log(/(\d{4})-(\d{1,2})-(\d{1,2})/.exec('2020-09-09')) // ['2020-09-09', '2020', '09', '09', index: 0, input: '2020-09-09', groups: undefined]
        // // 获取方式有局限性
        // console.log(RegExp.$1) // 2020
        // console.log(RegExp.$2) // 09
        // console.log(RegExp.$3) // 09

        //构造函数的方式 new 的方式
        // const exp1 = new RegExp('ab{2}')
        // console.log(exp1.test('abb')) // true 

        // console.log(/([a-z])\1/.exec('aa')) // ['aa', 'a', index: 0, input: 'aa', groups: undefined]
        // console.log(/([a-z])\1/.exec('ab')) // null
        // // <h1></h1>

        // console.log(/<([^<>]+)>[/d/D]*?<\/\1>/.exec('<h1></h1>')) // ['<h1></h1>', 'h1', index: 0, input: '<h1></h1>', groups: undefined]  反向引用

        // console.log(/(abc){2}/.exec('abcabc')) // (2) ['abcabc', 'abc', index: 0, input: 'abcabc', groups: undefined]
        // console.log(/(?:abc){2}/.exec('abcabc')) // ['abcabc', index: 0, input: 'abcabc', groups: undefined] 非捕获 (?:)

        // 5. 选择 ｜ 
        // console.log(/12|34|56/.test('34')) // true

        // 6. 断言 \b单词边界 \B 非单词边界
        // console.log(/\ban\b/.test('an apple')) // true 单词边界
        // console.log(/\ban\b/.test('anapple')) // false

        // console.log(/^ap/.test('apple')) // true 是否以xx开始
        // console.log(/le$/.test('apple')) // true 是否以xx结束

        // 环视
        // console.log(/a(?=b)/.test('ab')) // true //匹配a后面是不是紧跟着b
        // console.log(/a(?!b)/.test('ab')) // false //匹配a后面不是紧跟着b
        // console.log(/a(?=c)/.test('ab')) // false
        // console.log(/a(?!c)/.test('ab')) // true

        // 匹配方式 g: global 全局匹配
        // i: ignore case  忽略大小写
        // m：: multiply 多行匹配

        // console.log(/a/g.exec('1a,2a,3a'))
        console.log('1a,2a,3a'.replace(/a/,'b')) // 1b,2a,3a
        console.log('1a,2a,3a'.replace(/a/g,'b')) // 1b,2b,3b
        console.log('1A,2a,3a'.replace(/a/gi,'b')) // 1b,2b,3b
     console.log(/world$/m.test('hello world\n')) // true

     // 7. 优先级
     console.log(/(m|f)ood/.exec('mood'))

     // 8. 网站
    //  https://ihateregex.io/
    </script>
```

## css技巧
- offsetHeight,clientHeight,scrollHeight却别
```javascript
console.log("offsetHeight",box.offsetHeight) // 内容高度+padding+border
console.log("clientHeight",box.clientHeight) // 内容高度+padding
console.log("scrollHeight",box.scrollHeight) // 内容实际尺寸+ padding
```

## 杂谈
- 5大主流浏览器(有自己的内核)

|浏览器名称|内核|
|---|---|
|chrome|webkit blink|
|IE|trident|
|Safari|webkit|
|FileFox|gecko|
|Opera|presto|

- 轮流时间片
    1. 任务1 任务2
    2. 切分任务1 任务2 
    3. 随机排列这些任务时间片段，组成队列
    4. 按照喝这个队列顺序将任务片段送进JS进程
    5. JS线程执行一个又一个的任务片段

