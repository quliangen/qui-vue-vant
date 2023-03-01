# fe-infra
前端基建单体库

```shell
# 默认安装所有依赖
pnpm install

# 安装 依赖到指定包

# 示例：安装开源 @infra/request 安装 axios 依赖。删除 remove
pnpm -F @infra/request add axios 

# 示例：安装项目间依赖， @infra/qui-react-antd 安装 @infra/request 依赖。
pnpm -F @infra/qui-react-antd  add @infra/request   

```

### 项目目录说明（Structure）

工程项目的文件夹结构选项和命名约定

```shell
.
├── ...
├── packages
│   ├── qui-vue-vant # 基于 vant 封装的组件库。
│   ├── qui-react-antd # 基于 antd 封装的组件库。
│   ├── request # 请求库。
├── pnpm-lock.yaml # pnpm 提供的依赖版本锁定文件，解决依赖版本不一致的问题
├── pnpm-workspace.yaml # workspace 相关配置
└── README.md
```