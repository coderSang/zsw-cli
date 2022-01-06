// 通过axios获取结果
const axios = require('axios');
axios.interceptors.response.use(res => res.data)
axios.defaults.headers['Authorization'] ='token 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'
async function fetchRepoList() {
  // 可以通过配置文件 拉去不同的仓库对应的文件
  return axios.request({
    method: 'get',
    url: 'https://api.github.com/users/codersang/repos',
  });
}

async function fetchTagList(repo) {
  // 可以通过配置文件 拉去不同的仓库对应的文件
  return axios.request({
    method: 'get',
    url: `https://api.github.com/repos/codersang/${repo}/releases`,
  });
}
module.exports = {
  fetchRepoList,
  fetchTagList
}
