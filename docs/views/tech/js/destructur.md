# 解构赋值的使用技巧

## 数组解构(根据位置赋值)
- 交换变量(两个变量)
```javascript
let a = 'a'
let b = 'b'
[a,b]=[b,a]
console.log(a,b) // b a
```
- 交换变量(多个变量)
```javascript
let a = 'a'
let b = 'b'
let c = 'c'
let d = 'd'
[a,b,c,d]=[d,c,b,a]
console.log(a,b,c,d) // d c b a 
```

- 取其中部分元素(按照位置取值)
```javascript
let arr = [1,2,3,4]
let [num1,num2,num3] = arr
console.log(num1,num2,num3) // 1 2 3
```
- 取其中部分元素(取指定位置的值)
```javascript
let arr = [1,2,3,4]
let [num1,,,num3] = arr
console.log(num1,num3) // 1 4
```
- 取其中部分元素(给默认值,不存在的时候给默认值)
```javascript
let arr = [1,2,3,4]
let [num1,num3,,, num5=67] = arr
console.log(num1,num3, num5) // 1 2 67
```
- 取其中部分元素(取指定位置的值: 变量名已经存在,会覆盖掉原来的值)
```javascript
let arr = [1,2,3,4]
let num1  = 'num1'
let num3  = 'num3'
console.log(num1,num3) // num1 num3
[num1,num3] = arr
console.log(num1,num3) // 1 4
```
- 取其中部分元素(升级版)
```javascript
let arr = [1,2,3,4]
let {1:num1,3:num3} = arr
console.log(num1,num3) // 2 4
```
- 与不定元素结合使用(不定元素放到最后啊，可以实现复制)
```javascript
let arr = [1, 2, 3, 4]
let [num1, num3, ...restArr] = arr
console.log(num1, num3, restArr) // 1 2 [ 3, 4 ]
```
- 嵌套解构
``` javascript
let arr = [1, 2, [3, 4]]
let [,,[,res]] = arr
console.log(res) // 4
```

## 对象解构(根据属性值赋值)
* 普通解构
``` javascript
let obj = {
    age:12,
    job:'coder'
}
const {age,job} = obj
console.log(age,job); // 12 coder
```
* 重命名
```javascript
let obj = {
    age:12,
    job:'coder'
}
const {age:myAge,job:myJob} = obj
console.log(myAge,myJob); // 12 coder
```
* 骚操作
``` javascript
let obj = {
    age:12,
    job:'coder'
}
let arr = ['age','job']
const {[arr[0]]:myAge,[arr[1]]:myJob} = obj
console.log(myAge,myJob); // 12 coder
```
```javascript
let obj = {
    age:12,
    job:'coder'
}
let age = 'age';
({age}=obj)
console.log(age); // 12
```
* 其他
    1. 给默认值和数组一样
    2. 剩余参数和数组一样
    3. 嵌套解构和数组一样

## 可迭代解构(综合使用)
* 对象数组格式(当然也可以是Map)
``` javascript
let objList = [
    {
        age:12,
        job:'coder'
    },
    {
        age:32,
        job:'driver'
    },
    {
        age:30,
        job:'runner'
    }
]
objList.forEach(({age,job},index)=>{
    console.log(age,job,index)
})
// 12 coder 0
// 32 driver 1
// 30 runner 2
```
* 字符串
``` javascript
let str = 'hello world'
let [a,b,c] = str
console.log(a,b,c); // h e l 
```
* 正则
``` javascript
let str  = 'see123you12'
const arrReg = /(\D+)(\d+)(\D+)(\d+)/.exec(str)
const {1:a,3:b} = arrReg
console.log(a,b); // see you
```

* 骚操作
``` javascript
let objList = ['html','js','css']
objList.forEach(([item],index)=>{
    console.log(item) //????
})
```

