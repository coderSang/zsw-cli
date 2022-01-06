const ora = require('ora');

async function sleep(n) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, n)
  })
}
async function wrapLoading(fn, message, ...args) {
  const spinner = ora(message);
  spinner.start(); // 开启加载
  try {
    let res = await fn(...args);
    spinner.succeed();
    return res;
  } catch(e) {
    spinner.fail(`获取失败 3s后重新获取,失败原因：${e}`);
    await sleep(3000);
    return wrapLoading(fn, message, ...args);
  }
}
module.exports = {
  wrapLoading
}
