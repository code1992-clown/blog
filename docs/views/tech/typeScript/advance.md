## ts的“函数”

### 基本方法
1. keyof
```
interface ITest {
    name?:string,
    age: number
}
type TA = keyof ITest // 相当于 type TA = 'name'|'age'
let a:TA ='name' 


type TPoly =  {
    x:string,
    y: number
}
type TB = keyof TPoly // 相当于 type TB = 'x'|'y'
let b:TB ='y'

type TObject = {
    [k: number]: boolean
}
type TO = keyof TObject // => type TO = number,
let d: TO =666

type Tarray = {
    [k: string]: boolean
}
type T = keyof Tarray // => type T = number|string,只是js的一个问题obj[0]===obj['0']
let c: T ='c'
```
1. typeof
```

```

* TS的映射类型
```

```