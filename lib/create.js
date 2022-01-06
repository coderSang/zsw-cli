const path = require('path')
const fs = require('fs-extra');
const inquirer = require('inquirer');
const ProgressBar = require('progress');
const Creator = require('./Creator')
const { wrapLoading } = require('./utils');

module.exports = async function(appName, appArgs) {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, appName);
  //  存在该目录
  if(fs.existsSync(targetDir)){
    if (appArgs.force) {
      await fs.remove(targetDir);
    }
    else {
      // 已经有文件，但是用户没输入-f 提示用户是否覆盖
      let { action } = await inquirer.prompt([ // 配置询问的方式
        {
          name: 'action',
          type: 'list', // 类型非常丰富 输入框 多选
          message: '目标目录已经存在了，是否覆盖',
          choices: [
            {
              name: '确定',
              value: true
            },
            {
              name: '取消',
              value: false
            }
          ]
        }
      ])
      // 覆盖
      if (action) {
        await wrapLoading(()=>fs.remove(targetDir),'删除中')
        // console.log('执行中....');
        // const total = 100
        // const step = 10
        // let removed = false
        // // 移除了,removed变成true
        // fs.remove(targetDir).then(()=>{
        //   removed = true
        // })
        // const bar = new ProgressBar('进行中: [:bar]', { total: total, width: 10, complete: '*' });
        // const timer = setInterval( function () {
        //   //进度步长，total -step保证不走完，防止任务没结束进度条就结束了
        //   if (bar.curr < total -step) {
        //     bar.tick(step);
        //   }
        //   // 进度结束了直接结束
        //   if (removed) {
        //     bar.tick(total)
        //     console.log('文件已经覆盖');
        //     clearInterval(timer);
        //   }
        // }, 200);
      }
      else {
        return
      }
    }
  }
  // 创建项目
  const creator = new Creator(appName, targetDir)
  creator.create(); // 开始创建
}
