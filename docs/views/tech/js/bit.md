# 位运算的使用技巧

位运算符，直接操作二进制数据，运行效率较高，主要有<<, >>,&,|, ^, ~~我们平常会用这些位运算符来做什么呢，我能想到的是可以用来做权限管理。

* 控制权限案例

```javascript
let boss = 1
let boss1 = 1<<1
let boss2 = 1<<2
let boss3 = 1<<3
let x =boss|boss1 // 添加权限
console.log(x) // 3
x^=boss1 // 去除权限
console.log(x&x) // 1

```

* 取整数案例

```javascript
let num = 12.45
let res = ~~num
console.log(res) // 12

```