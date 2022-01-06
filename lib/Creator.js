const inquirer = require('inquirer');
const downloadGitRepo = require('download-git-repo'); // 不支持promise
const util = require('util');
const {fetchRepoList, fetchTagList} = require("./request");
const {
  wrapLoading
} = require('./utils');
class Creator {
  constructor(appName, targetDir) {
    this.appName = appName
    this.targetDir = targetDir
    // 此时这个方法就会是一个promise方法
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }
  // 开始创建文件
  async create() {
    // 1. 先拉去当前用户下的模板
    const repo = await this.fetchRepo();
    // 2. 通过模板找到版本号
    const tag = await this.fetchTag(repo);
    // 3 下载
    await this.download(repo, tag);
  }
  // 获取模板
  async fetchRepo() {
    let repos = await wrapLoading(fetchRepoList, '请求中…')
    repos = repos.map(item => item.name);
    if (!repos) return;
    const { repo } =  await inquirer.prompt({
      name: 'repo',
      type: 'list',
      choices: repos,
      message: '请选择一个模板取创建项目',
    })
    return repo;
  }
  // 获取版本号
  async fetchTag(repo) {
    let tags = await wrapLoading(fetchTagList, '请求中…', repo)
    tags = tags.map(item => item.tag_name);
    if (!tags) return;
    const { tag } =  await inquirer.prompt({
      name: 'tag',
      type: 'list',
      choices: tags,
      message: '请选择一个tag创建项目',
    })
    return tag;
  }
  // 下载
  async download(repo, tag) {
    // 需要先拼接处下载路径
    let requestUrl = `codersang/${repo}${tag ? '#' + tag : ''}`
    // 把资源下载到资源目录里面（后续可以增加缓存功能,先下载到系统目录中，稍后可以使用ejs handlebar去渲染模板，最后生成结果，再写入）
    await wrapLoading(()=>this.downloadGitRepo(requestUrl, this.targetDir, {}), '拷贝中…', repo)
  }
}
module.exports = Creator
