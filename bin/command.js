#! /usr/bin/env node

const program = require('commander');
program.version(`Version is ${require('../package.json').version}`)
  .description('自用脚手架')
  .usage('<command> [options]')
program
  .command('create <app-name>')
  .description('创建一个新项目')
  .option('-f, --force', '覆盖已经存在的目标目录')
  .action((name, cmd) => { // 调用该命令时执行的方法
    // 调用create模块去实现
    require('../lib/create')(name, cmd);
  })
program.parse(process.argv)
