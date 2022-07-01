---
layout: doc
---

# markDown
## 简介
Markdown是一种**轻量级标记语言**，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。常用的标记符号**不超过十个**，用于日常写作记录绰绰有余。  

并非所有Markdown应用程序都支持扩展语法元素。您需要检查您的应用程序所使用的轻量级标记语言是否支持您要使用的扩展语法元素。如果没有，那么仍然有可能在Markdown处理器中启用扩展。


请前往 **[官网](https://markdown.com.cn "最好的markdown教程")** 查看更多信息。

## 基础语法
| 元素         |       markDown语法 | 示例展示  | 最佳实践  |
| :---: | :---  | :---: | :---: |
| 标题  | # H1 <br/>  ## H2 <br/>  ### H3 <br/> #### H4 <br/> ##### H5 <br/> ###### H6 <br/>  | [标题语法示例](#head) | 请用一个空格在 # 和标题之间进行分隔 |
| 段落 | 你好 <br/>  <br/> 世界 | [段落语法示例](#para) | 要创建段落，请使用空白行将一行或多行文本进行分隔|
| 换行 | 你好 `<br/>` 世界 | [换行语法示例](#para) | 为了兼容性，请在行尾添加“结尾空格(两个或多个空格)”或 HTML 的 ` <br>` 标签来实现换行。|
| 加粗 | 你`**`好`**` | [加粗语法示例](#bold)  | 为兼容考虑，在单词或短语中间部分加粗的话，请使用星号。|
| 斜体 | 你`*`好`*` | [倾斜语法示例](#italic)  | 要斜体突出单词的中间部分，请在字母前后各添加一个星号，中间不要带空格。|
| 粗体和斜体 | 你`***`好`***` | [加粗和倾斜语法示例](#italicandbold) | 为了实现兼容性，请使用星号将单词或短语的中间部分加粗并以斜体显示，以示重要。|
| 引用 | > 你好 <br/> >> 世界| [引用语法示例](#import) | 为了实现兼容性，请使用星号将单词或短语的中间部分加粗并以斜体显示，以示重要。|
| 无序列表 | > 你好 <br/> >> - 世界|[有序语法示例](#ol)  | 嵌套使用tab键, 可以嵌套其他元素 |
| 有序列表 | */-/+ 1 <br/> * 2| [无序语法示例](#ul)  | 嵌套使用tab键, 可以嵌套其他元素   |
| 代码 | `const sum = (a,b)=>a+b`| [代码语法示例](#code) | 如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``)中  |
| 分割线 | `***`<br/> `---` <br/> `________`  | [分割线语法](#split)|  |
| 链接 | `[Markdown语法](https://markdown.com.cn "最好的markdown教程") /<https://markdown.com.cn> ` | [链接语法示例](#link)  |
|图片| `[![沙漠中的岩石图片](/assets/img/shiprock.jpg "Shiprock")](https://markdown.com.cn)`| [图片语法示例](#img)|
| 转译字符 | 在vitepress貌似做了处理 | |  |
| 内嵌html | 可以内嵌html | |  |

## 扩展语法
| 元素         |       markDown语法 | 示例展示  | 最佳实践  |
| :---: | :---  | :---: | :---: |
| 表格  | 具体参考：`https://markdown.com.cn/extended-syntax/tables.html` | |不能添加标题，块引用，列表，水平规则，图像或HTML标签|
| 围栏代码块  | ` 三个反引号（(``` ）或三个波浪号（~~~） ` | [围栏代码语法](#three) | 支持语法高亮 |
| 脚注 |  | [脚注语法](#script) |  |
| 标题编号 |  | [标题语法](#title)|  |
| 定义列表 |  | [定义列表语法](#define-list)|  |
| 删除线 |  | [删除线语法](#delete)|  |
| 任务列表语法 |  | [任务列表语法](#task)|  |
| Emoji表情 |  |[Emoji语法](#emoji) |  |
| 取消自动网址链接 | `  ` | |许多Markdown处理器会自动将URL转换为链接。这意味着如果您输入http://www.example.com，即使您未使用方括号，您的Markdown处理器也会自动将其转换为链接。 如果您不希望自动链接URL，则可以通过将URL表示为带反引号的代码来删除该链接 |

## 使用示例
* ###  标题语法{#head}
```javascript
// # Heading 1 (vitepress 默认h1有分割线)
// ## Heading 2 (vitepress 有默认链接id)
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```
# Heading 1
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

* ###  段落语法{#para}
```javascript
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```
I really like using Markdown.

I think I'll use it to format all of my documents from now on.

* ###  换行语法{#change}
```javascript
This is the first line.  
And this is the second line.
```
This is the first line.  
And this is the second line.

* ###  加粗语法{#bold}
```javascript
I just love **bold text**.
```
I just love **bold text**.

* ###  倾斜语法{#italic}
```javascript
I just love *bold text*.
```
I just love *bold text*.

* ###  倾斜加粗语法{#italicandbold}
```javascript
I just love ***bold text***.
```
I just love ***bold text***.

* ###  引用语法{#import}
```javascript
> #### 你好
>> - 世界
``` 
> ### 你好
>> - 世界

* ### 无序列表语法{#ol}
```javascript
+ 你好
- 世界是
* 哈哈哈
```
+ 你好
- 世界是
* 哈哈哈


* ###  有序列表语法{#ul}
```javascript
1. hello
    1. 你好
2. world
```
1. hello
    1. 你好
2. world

* ###  代码语法{#ul}
```javascript
    <html>
      <head>
      </head>
    </html>
```

* ###  分割语法{#split}
```javascript
   ***
   ______
   ---
```
   ***
   ______
   ---

* ###  链接语法{#link}
```javascript
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
<https://markdown.com.cn>
I love supporting the **[EFF](https://eff.org)**.

```
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。  
<https://markdown.com.cn>  
I love supporting the **[EFF](https://eff.org)**.

* ###  图片语法{#img}
```javascript
![你好,世界](imgs/test.jpeg)  
[![沙漠中的岩石图片](imgs/test.jpeg "Shiprock")](https://markdown.com.cn)


```
![你好,世界](imgs/test.jpeg)  
[![沙漠中的岩石图片](imgs/test.jpeg "链接图片")](https://markdown.com.cn)


* ###  围栏代码语法{#three}
``` javascript
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
``` javascript
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

* ###  脚注语法{#three}
``` javascript
Here's a simple footnote,[^1] and here's a longer one.[^bignote]
```
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

* ###  标题语法{#title}
``` javascript
#### My Great Heading {#title}
```
#### My Great Heading {#title}

* ###  标题语法{#define-list}
``` javascript
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
```
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

* ### 删除线语法{#delete}
``` javascript
~~世界是平坦的。~~ 我们现在知道世界是圆的。
```
~~世界是平坦的。~~ 我们现在知道世界是圆的。

* ### 删除线语法{#task}
``` javascript
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

* ### Emoji语法{#emoji}
``` javascript
去露营了！ :tent: 很快回来。
```
去露营了！ :tent: 很快回来。

## 结束语
以上就是markDown的基本用法，大家加油！😀😀😀😀😀😀