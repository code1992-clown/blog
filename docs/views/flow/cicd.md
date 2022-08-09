# Shell
## 常用命令
cd pwd clear
cat文件名，查看文件的内容


## x可执行权限

* source czf.sh
* bash czf.sh

## 语法

查看支持的shell：  cat /etc/shells
查看历史记录： history
查看历史条数： echo $HISTSIZE
查看历史文件： echo $HISTFILE

查看所有历史命令： history
清空命令： history -c
恢复命令：history -r
快速执行理事命令： ！历史id
执行上次的命令： ！！

注释：用‘#’号

### shell
```shell
name=999
echo $name
```