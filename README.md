# fe-infra
前端基建单体库

```shell
# 默认安装所有依赖
pnpm install

# 安装 依赖到指定包

# 示例：安装开源 @infra/request 安装 axios 依赖。删除 remove
pnpm -F @infra/request add axios 

# 示例：安装项目间依赖， @infra/qui-antd 安装 @infra/request 依赖。
pnpm -F @infra/qui-antd  add @infra/request   

```
