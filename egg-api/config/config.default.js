/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1595034330229_9729';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '121.196.124.78',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'qiuhx',
      // 数据库名
      database: 'for_zdh',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // 安全配置
  config.security = {
    csrf: {
      enable: false,
      // 允许访问接口的白名单
      domainWhiteList: [ 'http://localhost:3000' ],
    },
  };

  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.jwt = {
    secret: 'for_zdh_secret',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
