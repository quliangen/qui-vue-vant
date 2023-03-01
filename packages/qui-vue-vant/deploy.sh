#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
pnpm build:site

# 进入待发布的目录
cd ./site-dist

# 清理 .git 解决：Reinitialized existing Git repository
find . -name ".git"
rm -rf ./.git      

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f git@github.com:quliangen/qui-vue-vant.git master:gh-pages

cd -