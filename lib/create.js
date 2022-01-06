const path = require('path')
const fs = require('fs-extra');
const inquirer = require('inquirer');
const ProgressBar = require('progress');

module.exports = async function(appName, appArgs) {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, appName);
  if(fs.existsSync(targetDir)){
    //  存在是否覆盖
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
      if (action) { // 覆盖
        console.log('执行中....');
        const total = 100
        const step = 10
        let removed = false
        // 移除了,removed变成true
        fs.remove(targetDir).then(()=>{
          removed = true
        })
        const bar = new ProgressBar('progress: [:bar]', { total: total, width: 10, complete: '*' });
        const timer = setInterval( function () {
          // 有问题
          if (bar.curr < total -step) {
            bar.tick(step);  //进度步长
          }
          if (removed) {
            bar.tick(total)
            console.log('complete');
            clearInterval(timer);
          }
          if (bar.complete) {
            console.log('complete');
            clearInterval(timer);
          }
        }, 100);
      }
      // await fs.remove(targetDir);
    }
  }
}
