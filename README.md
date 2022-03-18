# exprest

> 一款RESTful API快速开发脚手架


## 介绍

exprest主要用来快速搭建RESTful API服务。


## 开发环境

系统采用node.js语言开发，最低版本要求12。

采用yarn管理依赖，最低版本要求1.22。

使用docker打包分发，最低版本要求18.06。


### 常用命令

- `yarn dev`：启动开发服务。
- `yarn dist`：编译打包并在`dist`目录下生成二进制文件。
- `yarn docker`：生成docker镜像文件。


### 安装部署

在安装docker环境的机器中，执行以下命令：

```
docker run -d --name exprest -p 1234:1234 exprest:latest
```

访问`localhost:1234/api/v1/hello`

