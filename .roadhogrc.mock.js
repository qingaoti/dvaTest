const api = require('./mock/api');


// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
const proxy = {
  'GET /api/users': api.getUser,
  'GET /api/project/notice': api.getNotice,
};

export default noProxy ? {} : proxy;
