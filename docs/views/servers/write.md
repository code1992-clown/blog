# 手写实现
- js各种继承方式
```javascript
// 原型继承；(引用值共享问题)
function Father () {
    this.name='father'
}
Father.prototype.say=function(){
    console.log('i am father')
}
function Son(){
    this.age= 12
}

Son.prototype = new Father() // 关键代码
const son1 = new Son
console.log(son1)
```
```javascript
// 构造函数继承；(解决引用值共性问题，没办法拿到原型上的方法)
function Father () {
    this.name='father'
}
Father.prototype.say = function(){
    console.log('i am father')
}

function Son(){
    this.age= 12
    Father.call(this) //关键代码
}
const son1 = new Son
console.log(son1)
```
```javascript
// 组合继承；(伪经典集成: 重复执行Super)
function Father () {
    this.name='father'
}
Father.prototype.say = function(){
    console.log('i am father')
}

function Son(){
    this.age= 12
    Father.call(this) // 关键代码
}
Son.prototype = new Father() // 关键代码
const son1 = new Son
console.log(son1)
```
```javascript
// 寄生组合继承(经典继承)；(存在原型覆盖的问题)
function Father () {
    this.name='father'
}
Father.prototype.say = function(){
    console.log('i am father')
}

function Son(){
    this.age= 12
    Father.call(this)
}
Son.prototype = Object.create(Father.prototype) // 关键代码
const son1 = new Son
console.log(son1)
```
```javascript
// 圣杯模式: 使用一个中间函数
// class extends: 类的方法
// 拷贝继承 : 很少用，待研究

// console.log(Foo.__proto__ === Function.prototype)
// console.log(Object.__proto__ === Function.prototype)
// console.log(Function.__proto__ === Function.prototype)
```
- call的实现
```javascript
Function.prototype._call = function(obj,...args){
    obj = obj??globalThis
    obj.fn = this
    const result = obj.fn(...args)
    delete obj.fn
    return result
}
var name = 'global this'
function test(a,b){
    console.log(this.name+a+b)
}
const obj = {
    name:'obj name'
}
test._call(obj,' name',' age')
```
- apply的实现
```javascript
Function.prototype._apply = function(obj,args){
    obj = obj??globalThis
    obj.fn = this
    const result = obj.fn(...args)
    delete obj.fn
    return result
}
var name = 'global this'
function test(a,b){
    console.log(this.name+a+b)
}
const obj = {
    name:'obj name'
}
test._apply(obj,[' name',' age'])
```
- new实现
```javascript
function myNew (fn,...args) {
    const newObj = Object.create(fn.prototype) // 创建一个新的对象并继承fn
    const result = fn.call(newObj,...args) // 改变this指向
    if(typeof result ==="object") return result
    return newObj
}
function Person(name,height) {
    this.name=name,
    this.height = height
}
const p = myNew(Person,'lucy',56)
console.log(p)
```
- 函数柯理化实现
```javascript
function currying(fn,...args){
    const len = fn.length // 获取函数参数长度
    return function(...args1){
        args = [...args,...args1]
        if(args.length<len){
            return currying(fn,...args)
        }
        return fn(...args)
    }
}
const sum =  (a,b,c)=>a+b+c
const res = currying(sum)(2)(3)(7)
console.log(res)
```