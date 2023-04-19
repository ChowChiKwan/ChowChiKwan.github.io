#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run docs:build # 生成静态文件
cd docs/.vitepress/dist # 进入生成的文件夹

# deploy to github
echo 'zhangpeiyao.cn' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:ChowChiKwan/ChowChiKwan.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://ChowChiKwan:${GITHUB_TOKEN}@github.com/ChowChiKwan/ChowChiKwan.github.io.git
  git config --global user.name "chowchikwan"
  git config --global user.email "953748496@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master # 推送到github

cd -
rm -rf docs/.vitepress/dist
